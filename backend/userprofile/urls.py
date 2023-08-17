from . import views
from django.urls import path

from .views import UserProfileList, UserProfileDetail

urlpatterns = [
    path('<int:id>/', UserProfileList.as_view(), name='user-list'),
    path('me/', UserProfileDetail.as_view(), name='user-profile-detail'),
]