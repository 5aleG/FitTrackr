from django.urls import path
from .views import (
    DailyCaloriesDetail,
    WeeklyCaloriesDetail,
    MonthlyCaloriesDetail,
    AllCaloriesList,
    DailyCaloriesCreate,
)

urlpatterns = [
    path('daily-calories/<int:user_profile>/', DailyCaloriesDetail.as_view(), name='daily-calories'),
    path('create-daily-calories/<int:user_profile>/', DailyCaloriesCreate.as_view(), name='create-daily-calories'),
    path('weekly-calories/<int:user_profile>/', WeeklyCaloriesDetail.as_view(), name='weekly-calories'),
    path('monthly-calories/<int:year>/<int:month>/', MonthlyCaloriesDetail.as_view(), name='monthly-calories'),
    path('all-calories/<int:user_profile>/', AllCaloriesList.as_view(), name='all-calories'),
]