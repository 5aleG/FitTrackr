from rest_framework import serializers
from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'first_name', 'last_name', 'age', 'height', 'weight', 'calorie_goal', 'weight_goal',
                  'water_intake_goal', 'workout_goal')
