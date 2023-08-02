from rest_framework import generics
from .models import User
from .serializers import UserSerializer


class UserList(generics.ListCreateAPIView):
    """
    List all users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
