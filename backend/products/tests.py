from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
from .models import Product
import json

class ProductAPITestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.admin_user = User.objects.create_user(
            username='testadmin',
            password='testpass123',
            is_staff=True,
            is_superuser=True
        )
        self.product = Product.objects.create(
            name='Test Circuit',
            description='A test circuit board',
            price=29.99
        )

    def test_list_products(self):
        """Test listing all products (public endpoint)"""
        response = self.client.get('/api/products')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Test Circuit')

    def test_get_product_detail(self):
        """Test getting a specific product (public endpoint)"""
        response = self.client.get(f'/api/products/{self.product.id}')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data['name'], 'Test Circuit')
        self.assertEqual(data['price'], 29.99)

    def test_admin_login(self):
        """Test admin login functionality"""
        response = self.client.post('/api/auth/login', {
            'username': 'testadmin',
            'password': 'testpass123'
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data['success'])
        self.assertEqual(data['token'], 'admin-token')

    def test_create_product_authenticated(self):
        """Test creating a product with authentication"""
        # First login
        self.client.post('/api/auth/login', {
            'username': 'testadmin',
            'password': 'testpass123'
        }, content_type='application/json')
        
        # Then create product
        response = self.client.post('/api/products', {
            'name': 'New Circuit',
            'description': 'A new circuit board',
            'price': 49.99
        }, 
        content_type='application/json',
        HTTP_AUTHORIZATION='Bearer admin-token')
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data['name'], 'New Circuit')

    def test_unauthorized_product_creation(self):
        """Test that product creation fails without authentication"""
        response = self.client.post('/api/products', {
            'name': 'Unauthorized Circuit',
            'description': 'Should not be created',
            'price': 99.99
        }, content_type='application/json')
        
        self.assertEqual(response.status_code, 401)

class ProductModelTestCase(TestCase):
    def test_product_creation(self):
        """Test creating a product model"""
        product = Product.objects.create(
            name='Test Product',
            description='Test description',
            price=19.99
        )
        self.assertEqual(str(product), 'Test Product')
        self.assertEqual(product.price, 19.99)
        self.assertTrue(product.created_at)
        self.assertTrue(product.updated_at)
