from ninja import Router, Schema
from ninja.security import HttpBearer
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from typing import List

class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        # Simple token authentication (in production, use proper JWT or session auth)
        if token == "admin-token":
            return token
        return None

auth = AuthBearer()

class LoginSchema(Schema):
    username: str
    password: str

class UserSchema(Schema):
    id: int
    username: str
    email: str
    is_staff: bool

router = Router()

@router.post("/login")
def login_user(request, credentials: LoginSchema):
    user = authenticate(request, username=credentials.username, password=credentials.password)
    if user and user.is_staff:
        login(request, user)
        return {"success": True, "message": "Login successful", "token": "admin-token"}
    return {"success": False, "message": "Invalid credentials or not admin"}

@router.post("/logout")
def logout_user(request):
    logout(request)
    return {"success": True, "message": "Logout successful"}

@router.get("/me", auth=auth)
def get_current_user(request):
    if request.user.is_authenticated:
        return UserSchema.from_orm(request.user)
    return {"error": "Not authenticated"}
