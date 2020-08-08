from django.db import models

from kine.models.Exercice import Exercice


class Program(models.Model):
    class ProgramType(models.TextChoices):
        TRAITEMENT = 'Traitement'
        POST_TRAITEMENT = 'Post-Traitement'

    name = models.CharField(max_length=200, verbose_name="Nom du programme")
    exercices = models.ManyToManyField('Exercice', through="ExerciceRoutine")
    description = models.TextField(verbose_name="Description")
    type = models.CharField(choices=ProgramType.choices, max_length=200)
    date_creation = models.DateTimeField(auto_created=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Programme'
        verbose_name_plural = 'Programmes'