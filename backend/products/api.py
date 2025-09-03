from ninja import Router, Schema
from ninja.security import HttpBearer
from django.shortcuts import get_object_or_404
from django.utils.html import escape
from django.core.exceptions import ValidationError
from .models import Product
from .auth_api import auth
from typing import List, Optional
from pydantic import validator

class ProductSchema(Schema):
    id: int
    name: str
    description: str
    price: float
    image: Optional[str] = None

    @classmethod
    def from_orm(cls, obj):
        return cls(
            id=obj.id,
            name=obj.name,
            description=obj.description,
            price=float(obj.price),
            image=obj.image.url if obj.image else None
        )

class ProductCreateSchema(Schema):
    name: str
    description: str
    price: float

    @validator('name')
    def validate_name(cls, v):
        if not v or not v.strip():
            raise ValueError('Name cannot be empty')
        if len(v.strip()) > 255:
            raise ValueError('Name too long (max 255 characters)')
        return v
    
    @validator('description')
    def validate_description(cls, v):
        if not v or not v.strip():
            raise ValueError('Description cannot be empty')
        return v
    
    @validator('price')
    def validate_price(cls, v):
        if v <= 0:
            raise ValueError('Price must be positive')
        if v > 999999.99:
            raise ValueError('Price too high')
        return v

class ProductUpdateSchema(Schema):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None

    @validator('name')
    def validate_name(cls, v):
        if v is not None:
            if not v.strip():
                raise ValueError('Name cannot be empty')
            if len(v.strip()) > 255:
                raise ValueError('Name too long (max 255 characters)')
        return v
    
    @validator('price')
    def validate_price(cls, v):
        if v is not None:
            if v <= 0:
                raise ValueError('Price must be positive')
            if v > 999999.99:
                raise ValueError('Price too high')
        return v

router = Router()

@router.get("/products", response=List[ProductSchema])
def list_products(request):
    """Get all products - public endpoint"""
    return [ProductSchema.from_orm(p) for p in Product.objects.all()]

@router.get("/products/{product_id}", response=ProductSchema)
def get_product(request, product_id: int):
    """Get a specific product - public endpoint"""
    product = get_object_or_404(Product, id=product_id)
    return ProductSchema.from_orm(product)

@router.post("/products", auth=auth, response=ProductSchema)
def create_product(request, payload: ProductCreateSchema):
    """Create a new product - admin only"""
    # Sanitize inputs to prevent XSS
    name = escape(payload.name.strip())
    description = escape(payload.description.strip())
    
    product = Product.objects.create(
        name=name,
        description=description,
        price=payload.price
    )
    return ProductSchema.from_orm(product)

@router.put("/products/{product_id}", auth=auth, response=ProductSchema)
def update_product(request, product_id: int, payload: ProductUpdateSchema):
    """Update a product - admin only"""
    product = get_object_or_404(Product, id=product_id)
    
    if payload.name is not None:
        product.name = escape(payload.name.strip())
    if payload.description is not None:
        product.description = escape(payload.description.strip())
    if payload.price is not None:
        product.price = payload.price
    
    product.save()
    return ProductSchema.from_orm(product)

@router.delete("/products/{product_id}", auth=auth)
def delete_product(request, product_id: int):
    """Delete a product - admin only"""
    product = get_object_or_404(Product, id=product_id)
    product.delete()
    return {"success": True, "message": "Product deleted successfully"}
