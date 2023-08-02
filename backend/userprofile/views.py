from rest_framework import generics
from .models import UserProfile
from .serilaizers import UserProfileSerializer


class UserProfileList(generics.ListCreateAPIView):
    """
    List all user profiles
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
