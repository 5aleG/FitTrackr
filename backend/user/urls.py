from . import views
from django.urls import path


urlpatterns = [
    path('users/', views.UserList.as_view(), name='user-list'),
]