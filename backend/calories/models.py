from django.db import models

from userprofile.models import UserProfile


class DailyCalories(models.Model):
    date = models.DateField()
    calories = models.PositiveIntegerField()
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return str(self.calories)


class WeeklyCalories(models.Model):
    start_date = models.DateField(unique=True)
    end_date = models.DateField(unique=True)
    calories = models.PositiveIntegerField()
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return str(self.calories)


class MonthlyCalories(models.Model):
    year = models.PositiveIntegerField()
    month = models.PositiveIntegerField()
    calories = models.PositiveIntegerField()
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return str(self.calories)


class AllTimeCalories(models.Model):
    calories = models.PositiveIntegerField()
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return str(self.calories)
