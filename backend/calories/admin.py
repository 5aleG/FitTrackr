from django.contrib import admin
from .models import DailyCalories, WeeklyCalories, MonthlyCalories, AllTimeCalories

admin.site.register(DailyCalories)
admin.site.register(WeeklyCalories)
admin.site.register(MonthlyCalories)
admin.site.register(AllTimeCalories)
