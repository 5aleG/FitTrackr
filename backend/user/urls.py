from . import views
from django.urls import path
from .views import UserProfileView, UserList


urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
]
