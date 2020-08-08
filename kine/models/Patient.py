from django.contrib.auth.models import User
from django.db import models

from kine.models import Program


class Patient(models.Model):
    user = models.OneToOneField(User, verbose_name="Utilisateur", on_delete=models.PROTECT)
    phone = models.CharField(max_length=10, verbose_name="Téléphone", null=True, blank=True)
    programs = models.ManyToManyField('Program', null=True, blank=True)
    is_active = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"


    class Meta:
        verbose_name = 'Patient'
        verbose_name_plural = 'Patient'