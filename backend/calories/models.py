from django.db import models
from django.utils import timezone

from userprofile.models import UserProfile


class DailyCalories(models.Model):
    date = models.DateField()
    calories = models.PositiveIntegerField()
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return str(self.calories)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.date = timezone.now().date()
        super().save(*args, **kwargs)
        self.update_aggregates()

    def update_aggregates(self):
        from datetime import timedelta

        # Update weekly, monthly, and all-time aggregates
        week_start = self.date - timedelta(days=self.date.weekday())
        week_end = week_start + timedelta(days=6)
        month_start = self.date.replace(day=1)
        month_end = (month_start + timedelta(days=32)).replace(day=1) - timedelta(days=1)

        weekly_calories = DailyCalories.objects.filter(
            user_profile=self.user_profile,
            date__range=[week_start, week_end]
        ).aggregate(models.Sum('calories'))['calories__sum']

        monthly_calories = DailyCalories.objects.filter(
            user_profile=self.user_profile,
            date__range=[month_start, month_end]
        ).aggregate(models.Sum('calories'))['calories__sum']

        all_time_calories = DailyCalories.objects.filter(
            user_profile=self.user_profile
        ).aggregate(models.Sum('calories'))['calories__sum']

        WeeklyCalories.objects.update_or_create(
            user_profile=self.user_profile,
            start_date=week_start,
            defaults={'end_date': week_end, 'calories': weekly_calories}
        )

        MonthlyCalories.objects.update_or_create(
            user_profile=self.user_profile,
            year=month_start.year,
            month=month_start.month,
            defaults={'calories': monthly_calories}
        )

        AllTimeCalories.objects.update_or_create(
            user_profile=self.user_profile,
            defaults={'calories': all_time_calories}
        )


class WeeklyCalories(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    calories = models.PositiveIntegerField()
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    class Meta:
        unique_together = ('user_profile', 'start_date', 'end_date')

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
