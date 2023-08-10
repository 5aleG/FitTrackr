from django.db import models
from user.models import User


class UserProfile(models.Model):

    ACTIVITY_LEVEL_CHOICES = [
        ('low', "Once per Week"),
        ('low-med', "Twice per Week"),
        ('med', "Tree times per Week"),
        ('med-high', "Four times per Week"),
        ('high', "Five times per Week"),
        ('very-high', "Six times per Week"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    first_name = models.CharField(max_length=50, default='', blank=True)
    last_name = models.CharField(max_length=50, default='', blank=True)
    age = models.IntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    activity_level = models.CharField(max_length=50, blank=True, choices=ACTIVITY_LEVEL_CHOICES)

    def __str__(self):
        return str(self.user.username)
