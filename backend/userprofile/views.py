from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from .serilaizers import UserProfileSerializer


class UserProfileList(generics.RetrieveAPIView):
    """
    Retrieve a specific user profile by ID
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'id'


class UserProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve and update the user profile of the currently authenticated user.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user.user_profile
