# A2D Circuits Backend API Documentation

## Overview
This Django backend provides REST API endpoints for managing A2D Circuits products and admin authentication using Django-Ninja.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
source venv/bin/activate
pip install django django-ninja django-cors-headers Pillow
```

### 2. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Create Superuser
```bash
python manage.py createsuperuser
# Username: admin
# Email: a2dcircuits123@gmail.com
# Password: [your-password]
```

### 4. Start Development Server
```bash
python manage.py runserver 0.0.0.0:8000
```

## API Endpoints

### Base URL
- Development: `http://localhost:8000/api`

### Authentication Endpoints

#### POST `/auth/login`
Admin login endpoint.

**Request Body:**
```json
{
    "username": "admin",
    "password": "your-password"
}
```

**Response:**
```json
{
    "success": true,
    "message": "Login successful",
    "token": "admin-token"
}
```

#### POST `/auth/logout`
Admin logout endpoint.

**Response:**
```json
{
    "success": true,
    "message": "Logout successful"
}
```

#### GET `/auth/me`
Get current authenticated user info.

**Headers:**
```
Authorization: Bearer admin-token
```

**Response:**
```json
{
    "id": 1,
    "username": "admin",
    "email": "a2dcircuits123@gmail.com",
    "is_staff": true
}
```

### Product Endpoints

#### GET `/products` (Public)
List all products.

**Response:**
```json
[
    {
        "id": 1,
        "name": "Arduino Uno R3",
        "description": "A microcontroller board based on the ATmega328P",
        "price": 29.99,
        "image": "/media/products/arduino-uno.jpg"
    }
]
```

#### GET `/products/{product_id}` (Public)
Get a specific product by ID.

**Response:**
```json
{
    "id": 1,
    "name": "Arduino Uno R3",
    "description": "A microcontroller board based on the ATmega328P",
    "price": 29.99,
    "image": "/media/products/arduino-uno.jpg"
}
```

#### POST `/products` (Admin Only)
Create a new product.

**Headers:**
```
Authorization: Bearer admin-token
```

**Request Body:**
```json
{
    "name": "New Circuit Board",
    "description": "Description of the circuit board",
    "price": 49.99
}
```

**Response:**
```json
{
    "id": 2,
    "name": "New Circuit Board",
    "description": "Description of the circuit board",
    "price": 49.99,
    "image": null
}
```

#### PUT `/products/{product_id}` (Admin Only)
Update an existing product.

**Headers:**
```
Authorization: Bearer admin-token
```

**Request Body:**
```json
{
    "name": "Updated Product Name",
    "description": "Updated description",
    "price": 59.99
}
```

#### DELETE `/products/{product_id}` (Admin Only)
Delete a product.

**Headers:**
```
Authorization: Bearer admin-token
```

**Response:**
```json
{
    "success": true,
    "message": "Product deleted successfully"
}
```

## Django Admin Interface

Access the Django admin interface at: `http://localhost:8000/admin`

Use the superuser credentials to:
- Manage products
- Add product images
- View and manage users

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (Next.js frontend)
- `http://127.0.0.1:3000`

## Frontend Integration

### Example Frontend API Calls

```javascript
// Get all products
const getProducts = async () => {
    const response = await fetch('http://localhost:8000/api/products');
    return response.json();
};

// Admin login
const adminLogin = async (username, password) => {
    const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

// Create product (admin only)
const createProduct = async (productData, token) => {
    const response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
    });
    return response.json();
};
```

## Testing

Run the test suite:
```bash
python manage.py test
```

The tests cover:
- Product CRUD operations
- Authentication endpoints
- Admin-only access controls
- Model validation

## Features Implemented

✅ **Complete Backend System Setup**
- Django project with Django-Ninja API framework
- Product model with image support
- Database migrations and setup

✅ **Fully Functional Backend APIs**
- Product listing (public)
- Product detail view (public)
- Product CRUD operations (admin only)
- Authentication endpoints

✅ **Admin Login and Product Management**
- Django admin interface
- Superuser creation
- Admin authentication API
- Protected endpoints for product management

✅ **Testing Strategy**
- Unit tests for API endpoints
- Model tests
- Authentication tests
- Integration tests

✅ **CORS and Frontend Integration**
- CORS headers configured for Next.js frontend
- Media file serving for product images
- API documentation for frontend integration

## Next Steps for Frontend Integration

1. Update the Next.js frontend to use these API endpoints
2. Replace the sample data with API calls
3. Add admin interface in the frontend for product management
4. Implement authentication flow in the frontend
5. Add image upload functionality

## Security Notes

- The current authentication uses a simple token approach
- For production, consider implementing JWT tokens or session-based authentication
- Ensure HTTPS is used in production
- Add rate limiting and other security measures as needed
