from django.db import models

from kine.models.Exercice import Exercice


class ExerciceVariant(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nom")
    description = models.TextField(verbose_name="Description", null=True, blank=True)
    media = models.ForeignKey("Media", on_delete=models.PROTECT, null=True, blank=True)
    date_creation = models.DateTimeField(auto_created=True, auto_now=True)
    exercice = models.ForeignKey(Exercice, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.exercice.name} {self.name}"