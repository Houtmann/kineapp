from django.db import models


class Media(models.Model):
    class MediaType(models.TextChoices):
        VIDEO = 'Video'
        PHOTO = 'Photo'
    name = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(choices=MediaType.choices, max_length=200)
    file = models.FileField(null=True, blank=True)
    date_creation = models.DateTimeField(auto_now=True)