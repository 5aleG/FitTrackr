from rest_framework import generics
from datetime import date
from .models import DailyCalories, WeeklyCalories, MonthlyCalories
from .serializers import (
    DailyCaloriesSerializer,
    WeeklyCaloriesSerializer,
    MonthlyCaloriesSerializer,
)


class DailyCaloriesCreate(generics.CreateAPIView):
    queryset = DailyCalories.objects.all()
    serializer_class = DailyCaloriesSerializer
    lookup_field = 'user_profile'


class DailyCaloriesDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DailyCaloriesSerializer
    lookup_field = 'user_profile'

    def get_queryset(self):
        user_profile_id = self.kwargs['user_profile']
        current_date = date.today()
        return DailyCalories.objects.filter(user_profile=user_profile_id, date=current_date)


class WeeklyCaloriesDetail(generics.RetrieveUpdateAPIView):
    queryset = WeeklyCalories.objects.all()
    serializer_class = WeeklyCaloriesSerializer
    lookup_field = 'user_profile'

    def get_queryset(self):
        user_profile_id = self.kwargs['user_profile']
        return WeeklyCalories.objects.filter(user_profile=user_profile_id)


class MonthlyCaloriesDetail(generics.RetrieveUpdateAPIView):
    queryset = MonthlyCalories.objects.all()
    serializer_class = MonthlyCaloriesSerializer


class AllCaloriesList(generics.ListAPIView):
    serializer_class = DailyCaloriesSerializer
    lookup_field = 'user_profile'

    def get_queryset(self):
        user_profile_id = self.kwargs['user_profile']
        return DailyCalories.objects.filter(user_profile=user_profile_id)
