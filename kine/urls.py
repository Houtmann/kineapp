from django.contrib.auth.views import LoginView
from django.urls import path, include


from kine.views.initialData import InitialData, ProgramsView

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('initial-data', InitialData.as_view({'get': 'retrieve'})),
    path('programmes', ProgramsView.as_view({'get': 'list'}))

]