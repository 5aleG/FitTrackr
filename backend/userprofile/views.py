from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from .serilaizers import UserProfileSerializer


class UserProfileList(generics.ListCreateAPIView):
    """
    List all user profiles
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class UserProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve and update the user profile of the currently authenticated user.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user.user_profile
