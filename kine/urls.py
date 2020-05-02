from django.contrib.auth.views import LoginView
from django.urls import path, include

from kine.views.initialData import InitialData

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('initial-data', InitialData.as_view())
]