from django.contrib.auth.views import LoginView
from django.urls import path, include



urlpatterns = [
    path('login/', LoginView.as_view())
]