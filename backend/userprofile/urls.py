from . import views
from django.urls import path


urlpatterns = [
    path('', views.UserProfileList.as_view(), name='user-list'),
]