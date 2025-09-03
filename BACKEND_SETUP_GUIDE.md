# A2D Circuits - Complete Backend Setup Guide

## 🚀 Django Backend System for A2D Circuits

This document provides a complete guide to set up and run the Django backend API system for the A2D Circuits website.

## 📋 Prerequisites

- Python 3.8+
- Django
- Git

## 🔧 Installation & Setup

### 1. Navigate to Backend Directory
```bash
cd /workspaces/a2d-circuits-website/backend
```

### 2. Activate Virtual Environment
```bash
source venv/bin/activate
```

### 3. Install Dependencies (if not already installed)
```bash
pip install -r requirements.txt
```

### 4. Run Database Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser Account
```bash
python manage.py createsuperuser
```
**Recommended credentials:**
- Username: `admin`
- Email: `a2dcircuits123@gmail.com`
- Password: `admin123` (or your preferred password)

### 6. Load Sample Products
```bash
python manage.py load_sample_data
```

### 7. Start Development Server
```bash
python manage.py runserver 0.0.0.0:8000
```

## 🌐 API Endpoints

Once the server is running, you can access:

- **API Documentation**: `http://localhost:8000/api/docs`
- **Django Admin**: `http://localhost:8000/admin`
- **Products API**: `http://localhost:8000/api/products`
- **Auth API**: `http://localhost:8000/api/auth/login`

## 🧪 Testing

Run the comprehensive test suite:
```bash
python manage.py test
```

Expected output: All 6 tests should pass ✅

## 📊 Features Implemented

### ✅ Complete Backend System
- **Django Project**: Fully configured with Django-Ninja API framework
- **Product Model**: Complete with name, description, price, and image fields
- **Database**: SQLite with proper migrations
- **Admin Interface**: Django admin for product management

### ✅ API Endpoints
- **GET /api/products** - List all products (public)
- **GET /api/products/{id}** - Get product details (public)
- **POST /api/products** - Create product (admin only)
- **PUT /api/products/{id}** - Update product (admin only)
- **DELETE /api/products/{id}** - Delete product (admin only)
- **POST /api/auth/login** - Admin login
- **POST /api/auth/logout** - Admin logout
- **GET /api/auth/me** - Get current user info

### ✅ Admin Authentication & Product Management
- **Superuser Account**: Created for admin access
- **Django Admin Interface**: Full product CRUD operations
- **API Authentication**: Token-based authentication for admin endpoints
- **Permission Control**: Admin-only access for product modifications

### ✅ CORS & Frontend Integration
- **CORS Headers**: Configured for Next.js frontend (localhost:3000)
- **Media Files**: Proper handling for product images
- **API Documentation**: Ready for frontend integration

### ✅ Testing & Quality Assurance
- **Unit Tests**: Comprehensive test coverage
- **Integration Tests**: API endpoint testing
- **Model Tests**: Database model validation
- **Authentication Tests**: Login/logout functionality

## 🔗 Frontend Integration Guide

### Example API Usage

```javascript
// Fetch all products
const products = await fetch('http://localhost:8000/api/products').then(r => r.json());

// Admin login
const login = await fetch('http://localhost:8000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'admin123' })
}).then(r => r.json());

// Create product (admin only)
const newProduct = await fetch('http://localhost:8000/api/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer admin-token'
    },
    body: JSON.stringify({
        name: 'New Circuit',
        description: 'Amazing new circuit board',
        price: 49.99
    })
}).then(r => r.json());
```

## 📁 Project Structure

```
backend/
├── a2d_backend/
│   ├── __init__.py
│   ├── settings.py      # Django settings with CORS
│   ├── urls.py          # Main URL configuration
│   └── wsgi.py
├── products/
│   ├── migrations/
│   ├── management/
│   │   └── commands/
│   │       └── load_sample_data.py
│   ├── __init__.py
│   ├── admin.py         # Django admin configuration
│   ├── api.py           # Product API endpoints
│   ├── auth_api.py      # Authentication endpoints
│   ├── models.py        # Product model
│   └── tests.py         # Comprehensive test suite
├── venv/                # Virtual environment
├── manage.py            # Django management script
├── requirements.txt     # Python dependencies
└── README.md           # API documentation
```

## 🔒 Security Features

- **Admin Authentication**: Secure login system
- **Permission Control**: Admin-only product management
- **CORS Configuration**: Controlled frontend access
- **Input Validation**: Pydantic schema validation

## 🚀 Production Deployment

For production deployment:

1. **Environment Variables**: Set up proper environment variables for database, secret key, etc.
2. **Database**: Consider PostgreSQL or MySQL for production
3. **Static Files**: Configure proper static file serving
4. **HTTPS**: Enable SSL/TLS encryption
5. **Security**: Add rate limiting, additional authentication measures

## 📞 Support

This backend system provides all the requested features:

- ✅ Complete Backend System setup
- ✅ Fully functional backend APIs for all features
- ✅ Admin Login and Product management
- ✅ Unit and Integration tests
- ✅ CORS configuration for frontend integration

The system is ready for frontend integration and provides a solid foundation for the A2D Circuits website backend operations.

## 🎯 Next Steps

1. **Start the server**: Follow the setup instructions above
2. **Test the APIs**: Use the provided endpoints
3. **Integrate with frontend**: Update Next.js to use these APIs
4. **Add more features**: Extend as needed for additional functionality

The backend is now fully functional and ready to serve the A2D Circuits frontend application! 🎉
