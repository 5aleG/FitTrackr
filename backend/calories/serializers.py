from rest_framework import serializers
from .models import DailyCalories, WeeklyCalories, MonthlyCalories, AllTimeCalories


class DailyCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyCalories
        fields = '__all__'


class WeeklyCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeeklyCalories
        fields = '__all__'


class MonthlyCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyCalories
        fields = '__all__'


class AllTimeCaloriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllTimeCalories
        fields = '__all__'
