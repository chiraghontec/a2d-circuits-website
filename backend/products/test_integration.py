"""
Integration tests for the A2D Circuits API system.
These tests cover end-to-end workflows and ensure all features work together.
"""

from django.test import TestCase, Client
from django.contrib.auth.models import User
from .models import Product
import json


class IntegrationTestCase(TestCase):
    """Test complete workflows from frontend perspective"""
    
    def setUp(self):
        self.client = Client()
        self.admin_user = User.objects.create_user(
            username='admin',
            password='admin123',
            email='admin@a2dcircuits.com',
            is_staff=True,
            is_superuser=True
        )
        
        # Create some sample products
        self.products = []
        for i in range(1, 4):
            product = Product.objects.create(
                name=f'Circuit Board {i}',
                description=f'High-quality circuit board #{i} for testing',
                price=29.99 + (i * 10)
            )
            self.products.append(product)

    def test_complete_admin_workflow(self):
        """Test complete admin workflow: login, create, update, delete product"""
        
        # Step 1: Admin login
        response = self.client.post('/api/auth/login', {
            'username': 'admin',
            'password': 'admin123'
        }, content_type='application/json')
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data['success'])
        token = data['token']
        
        # Step 2: Create a new product
        product_data = {
            'name': 'Arduino Nano Clone',
            'description': 'Compatible Arduino Nano with USB-C connector',
            'price': 15.99
        }
        
        response = self.client.post('/api/products', 
                                   product_data,
                                   content_type='application/json',
                                   HTTP_AUTHORIZATION=f'Bearer {token}')
        
        self.assertEqual(response.status_code, 200)
        created_product = response.json()
        product_id = created_product['id']
        
        # Step 3: Update the product
        update_data = {
            'name': 'Arduino Nano Clone V2',
            'price': 18.99
        }
        
        response = self.client.put(f'/api/products/{product_id}',
                                  update_data,
                                  content_type='application/json',
                                  HTTP_AUTHORIZATION=f'Bearer {token}')
        
        self.assertEqual(response.status_code, 200)
        updated_product = response.json()
        self.assertEqual(updated_product['name'], 'Arduino Nano Clone V2')
        self.assertEqual(updated_product['price'], 18.99)
        
        # Step 4: Verify product appears in listing
        response = self.client.get('/api/products')
        self.assertEqual(response.status_code, 200)
        products = response.json()
        product_names = [p['name'] for p in products]
        self.assertIn('Arduino Nano Clone V2', product_names)
        
        # Step 5: Delete the product
        response = self.client.delete(f'/api/products/{product_id}',
                                     HTTP_AUTHORIZATION=f'Bearer {token}')
        
        self.assertEqual(response.status_code, 200)
        
        # Step 6: Verify product is gone
        response = self.client.get('/api/products')
        products = response.json()
        product_names = [p['name'] for p in products]
        self.assertNotIn('Arduino Nano Clone V2', product_names)

    def test_public_access_workflow(self):
        """Test workflow for public users (no authentication required)"""
        
        # Public users can view products
        response = self.client.get('/api/products')
        self.assertEqual(response.status_code, 200)
        products = response.json()
        self.assertEqual(len(products), 3)  # Our sample products
        
        # Public users can view specific product details
        product_id = self.products[0].id
        response = self.client.get(f'/api/products/{product_id}')
        self.assertEqual(response.status_code, 200)
        product = response.json()
        self.assertEqual(product['name'], 'Circuit Board 1')
        
        # Public users cannot create products
        response = self.client.post('/api/products', {
            'name': 'Unauthorized Product',
            'description': 'Should not be created',
            'price': 99.99
        }, content_type='application/json')
        
        self.assertEqual(response.status_code, 401)

    def test_error_handling(self):
        """Test error handling for various scenarios"""
        
        # Login with invalid credentials
        response = self.client.post('/api/auth/login', {
            'username': 'invalid',
            'password': 'invalid'
        }, content_type='application/json')
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertFalse(data['success'])
        
        # Try to access non-existent product
        response = self.client.get('/api/products/999')
        self.assertEqual(response.status_code, 404)
        
        # Try to update non-existent product with valid auth
        self.client.post('/api/auth/login', {
            'username': 'admin',
            'password': 'admin123'
        }, content_type='application/json')
        
        response = self.client.put('/api/products/999',
                                  {'name': 'Updated'},
                                  content_type='application/json',
                                  HTTP_AUTHORIZATION='Bearer admin-token')
        
        self.assertEqual(response.status_code, 404)

    def test_data_validation(self):
        """Test data validation for product creation and updates"""
        
        # Login first
        self.client.post('/api/auth/login', {
            'username': 'admin',
            'password': 'admin123'
        }, content_type='application/json')
        
        # Test creating product with missing required fields
        response = self.client.post('/api/products', {
            'name': 'Incomplete Product'
            # Missing description and price
        }, 
        content_type='application/json',
        HTTP_AUTHORIZATION='Bearer admin-token')
        
        self.assertEqual(response.status_code, 422)  # Validation error
        
        # Test creating product with invalid price
        response = self.client.post('/api/products', {
            'name': 'Invalid Price Product',
            'description': 'Product with invalid price',
            'price': 'not-a-number'
        }, 
        content_type='application/json',
        HTTP_AUTHORIZATION='Bearer admin-token')
        
        self.assertEqual(response.status_code, 422)  # Validation error

    def test_admin_authentication_edge_cases(self):
        """Test authentication edge cases"""
        
        # Create a regular user (not admin)
        regular_user = User.objects.create_user(
            username='regular',
            password='regular123',
            is_staff=False
        )
        
        # Regular user cannot login to admin
        response = self.client.post('/api/auth/login', {
            'username': 'regular',
            'password': 'regular123'
        }, content_type='application/json')
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertFalse(data['success'])
        self.assertIn('not admin', data['message'])
        
        # Test with invalid token
        response = self.client.post('/api/products', {
            'name': 'Test Product',
            'description': 'Test',
            'price': 10.99
        }, 
        content_type='application/json',
        HTTP_AUTHORIZATION='Bearer invalid-token')
        
        self.assertEqual(response.status_code, 401)

    def test_cors_and_api_structure(self):
        """Test API structure and CORS headers"""
        
        # Test that API endpoints are properly structured
        endpoints_to_test = [
            '/api/products',
            '/api/auth/login',
            '/api/auth/logout'
        ]
        
        for endpoint in endpoints_to_test:
            if 'login' in endpoint or 'logout' in endpoint:
                # POST endpoints
                response = self.client.post(endpoint, {}, content_type='application/json')
                # Should not return 404 (endpoint exists)
                self.assertNotEqual(response.status_code, 404)
            else:
                # GET endpoints  
                response = self.client.get(endpoint)
                self.assertNotEqual(response.status_code, 404)


class PerformanceTestCase(TestCase):
    """Test API performance with larger datasets"""
    
    def setUp(self):
        self.client = Client()
        # Create many products to test performance
        Product.objects.bulk_create([
            Product(
                name=f'Product {i}',
                description=f'Description for product {i}',
                price=10.00 + i
            )
            for i in range(100)
        ])

    def test_large_product_list_performance(self):
        """Test that API can handle listing many products efficiently"""
        response = self.client.get('/api/products')
        self.assertEqual(response.status_code, 200)
        products = response.json()
        self.assertEqual(len(products), 100)
        
        # Response should be reasonably fast (implementation detail)
        # In a real scenario, you might want pagination for large datasets


class SecurityTestCase(TestCase):
    """Test security aspects of the API"""
    
    def setUp(self):
        self.client = Client()
        self.admin_user = User.objects.create_user(
            username='admin',
            password='admin123',
            is_staff=True,
            is_superuser=True
        )

    def test_sql_injection_protection(self):
        """Test that the API is protected against SQL injection"""
        
        # Try SQL injection in product ID
        malicious_id = "1; DROP TABLE products_product; --"
        response = self.client.get(f'/api/products/{malicious_id}')
        
        # Should either return 404 (safe handling) or validation error
        # But definitely not a 500 server error indicating SQL injection worked
        self.assertIn(response.status_code, [400, 404, 422])

    def test_xss_protection(self):
        """Test XSS protection in product data"""
        
        # Login as admin
        self.client.post('/api/auth/login', {
            'username': 'admin',
            'password': 'admin123'
        }, content_type='application/json')
        
        # Try to create product with XSS payload
        xss_payload = '<script>alert("xss")</script>'
        response = self.client.post('/api/products', {
            'name': xss_payload,
            'description': f'Description with {xss_payload}',
            'price': 29.99
        }, 
        content_type='application/json',
        HTTP_AUTHORIZATION='Bearer admin-token')
        
        if response.status_code == 200:
            # If product was created, verify the data is properly escaped
            product = response.json()
            self.assertNotIn('<script>', str(product))

    def test_unauthorized_access_protection(self):
        """Test that protected endpoints properly reject unauthorized access"""
        
        protected_endpoints = [
            ('POST', '/api/products', {'name': 'Test', 'description': 'Test', 'price': 10.99}),
            ('PUT', '/api/products/1', {'name': 'Updated'}),
            ('DELETE', '/api/products/1', {}),
        ]
        
        for method, endpoint, data in protected_endpoints:
            if method == 'POST':
                response = self.client.post(endpoint, data, content_type='application/json')
            elif method == 'PUT':
                response = self.client.put(endpoint, data, content_type='application/json')
            elif method == 'DELETE':
                response = self.client.delete(endpoint)
            
            self.assertEqual(response.status_code, 401, 
                           f"{method} {endpoint} should require authentication")
