from rest_framework import generics
from .models import User
from .serializers import UserSerializer


class UserList(generics.ListCreateAPIView):
    """
    List all users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserProfileView(generics.RetrieveUpdateAPIView):
    """
    Retrieve and update the current user's profile
    """
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch', 'post']

    def get_object(self):
        return self.request.user