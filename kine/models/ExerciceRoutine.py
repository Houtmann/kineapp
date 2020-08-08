from django.db import models

from kine.models import Exercice


class ExerciceRoutine(models.Model):
    exercice = models.ForeignKey('Exercice', on_delete=models.CASCADE)
    program = models.ForeignKey("Program", on_delete=models.CASCADE)
    serie = models.PositiveIntegerField(null=True, blank=True, verbose_name='Series')
    rep = models.PositiveIntegerField(null=True, blank=True, verbose_name="Repetitions")
    description = models.TextField(null=True, blank=True)
    ris = models.DurationField(null=True, blank=True)

    class Meta:
        verbose_name = 'Exercice Routine'
        verbose_name_plural = 'Exercice Routines'

    def __str__(self):
        return self.exercice.name