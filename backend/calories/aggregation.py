from datetime import timedelta
from django.db.models import Sum
from calories.models import AllTimeCalories, DailyCalories, MonthlyCalories, WeeklyCalories


def calculate_weekly_calories(user_profile):
    daily_calories = DailyCalories.objects.filter(user_profile=user_profile).order_by('date')

    weekly_calories = {}
    for entry in daily_calories:
        week_start = entry.date - timedelta(days=entry.date.weekday())
        week_end = week_start + timedelta(days=6)

        if week_start not in weekly_calories:
            weekly_calories[week_start] = {
                'start_date': week_start,
                'end_date': week_end,
                'calories': 0
            }

        weekly_calories[week_start]['calories'] += entry.calories

    for week_start, data in weekly_calories.items():
        WeeklyCalories.objects.update_or_create(
            user_profile=user_profile,
            week_start=week_start,
            defaults={'week_end': data['week_end'], 'calories': data['calories']}
        )


def calculate_monthly_calories(user_profile):
    daily_calories = DailyCalories.objects.filter(user_profile=user_profile).order_by('date')

    monthly_calories = {}
    for entry in daily_calories:
        month = entry.date.replace(day=1)

        if month not in monthly_calories:
            monthly_calories[month] = {
                'month': month,
                'calories': 0
            }

        monthly_calories[month]['calories'] += entry.calories

    for month, data in monthly_calories.items():
        MonthlyCalories.objects.update_or_create(
            user_profile=user_profile,
            month=month,
            defaults={'calories': data['calories']}
        )


def calculate_all_time_calories(user_profile):
    total_calories = DailyCalories.objects.filter(user_profile=user_profile).aggregate(total_calories=Sum('calories'))['total_calories'] or 0

    all_time_calories, created = AllTimeCalories.objects.get_or_create(
        user_profile=user_profile,
        defaults={'calories': total_calories}
    )

    if not created:
        all_time_calories.calories = total_calories
        all_time_calories.save()
