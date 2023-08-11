from django.urls import path
from .views import (
    DailyCaloriesDetail,
    WeeklyCaloriesDetail,
    MonthlyCaloriesDetail,
    AllTimeCaloriesDetail,
    DailyCaloriesCreate,
)

urlpatterns = [
    path('daily-calories/<int:user_profile>/', DailyCaloriesDetail.as_view(), name='daily-calories'),
    path('create-daily-calories/<int:user_profile>/', DailyCaloriesCreate.as_view(), name='create-daily-calories'),
    path('weekly-calories/<int:pk>', WeeklyCaloriesDetail.as_view(), name='weekly-calories'),
    path('monthly-calories/', MonthlyCaloriesDetail.as_view(), name='monthly-calories'),
    path('all-time-calories/', AllTimeCaloriesDetail.as_view(), name='all-time-calories'),
]
