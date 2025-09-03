from ninja import Router, Schema
from ninja.security import HttpBearer
from django.shortcuts import get_object_or_404
from .models import Product
from .auth_api import auth
from typing import List, Optional

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

class ProductUpdateSchema(Schema):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None

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
    product = Product.objects.create(
        name=payload.name,
        description=payload.description,
        price=payload.price
    )
    return ProductSchema.from_orm(product)

@router.put("/products/{product_id}", auth=auth, response=ProductSchema)
def update_product(request, product_id: int, payload: ProductUpdateSchema):
    """Update a product - admin only"""
    product = get_object_or_404(Product, id=product_id)
    
    if payload.name is not None:
        product.name = payload.name
    if payload.description is not None:
        product.description = payload.description
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
