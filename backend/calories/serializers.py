from rest_framework import serializers
from .models import DailyCalories, WeeklyCalories, MonthlyCalories, AllTimeCalories


class DailyCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyCalories
        fields = ('user_profile', 'calories', 'date')


class WeeklyCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeeklyCalories
        fields = ('start_date', 'end_date', 'calories', 'user_profile')


class MonthlyCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyCalories
        fields = '__all__'


class AllTimeCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllTimeCalories
        fields = '__all__'
