from rest_framework import generics
from .aggregation import calculate_weekly_calories, calculate_monthly_calories, calculate_all_time_calories
from .models import DailyCalories, WeeklyCalories, MonthlyCalories, AllTimeCalories
from .serializers import (
    DailyCaloriesSerializer,
    WeeklyCaloriesSerializer,
    MonthlyCaloriesSerializer,
    AllTimeCaloriesSerializer,
)


class DailyCaloriesCreate(generics.CreateAPIView):
    queryset = DailyCalories.objects.all()
    serializer_class = DailyCaloriesSerializer

    def perform_create(self, serializer):
        user_profile = self.request.user.user_profile
        serializer.save(user_profile=user_profile)


class DailyCaloriesDetail(generics.RetrieveUpdateAPIView):
    queryset = DailyCalories.objects.all()
    serializer_class = DailyCaloriesSerializer

    def perform_create(self, serializer):
        user_profile = self.request.user.user_profile
        serializer.save(user_profile=user_profile)
        calculate_weekly_calories(user_profile)
        calculate_monthly_calories(user_profile)
        calculate_all_time_calories(user_profile)


class WeeklyCaloriesDetail(generics.RetrieveUpdateAPIView):
    queryset = WeeklyCalories.objects.all()
    serializer_class = WeeklyCaloriesSerializer
    lookup_field = 'pk'

    def perform_create(self, serializer):
        user_profile = self.request.user.user_profile
        serializer.save(user_profile=user_profile)


class MonthlyCaloriesDetail(generics.RetrieveUpdateAPIView):
    queryset = MonthlyCalories.objects.all()
    serializer_class = MonthlyCaloriesSerializer

    def perform_create(self, serializer):
        user_profile = self.request.user.user_profile
        serializer.save(user_profile=user_profile)


class AllTimeCaloriesDetail(generics.RetrieveUpdateAPIView):
    queryset = AllTimeCalories.objects.all()
    serializer_class = AllTimeCaloriesSerializer

    def perform_create(self, serializer):
        user_profile = self.request.user.user_profile
        serializer.save(user_profile=user_profile)
