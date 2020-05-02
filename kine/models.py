from django.contrib.auth.models import User
from django.db import models

# Create your models here.





class Exercice(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nom")
    description = models.TextField(verbose_name="Description", null=True, blank=True)
    media = models.ForeignKey("Media", on_delete=models.PROTECT , null=True, blank=True)
    date_creation = models.DateTimeField(auto_created=True, auto_now=True)

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = 'Exercice'
        verbose_name_plural = 'Exercices'

class ExerciceVariant(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nom")
    description = models.TextField(verbose_name="Description", null=True, blank=True)
    media = models.ForeignKey("Media", on_delete=models.PROTECT, null=True, blank=True)
    date_creation = models.DateTimeField(auto_created=True, auto_now=True)
    exercice = models.ForeignKey(Exercice, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.exercice.name} {self.name}"

class ExerciceRoutine(models.Model):
    exercice = models.ForeignKey(Exercice, on_delete=models.CASCADE)
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


class Program(models.Model):
    class ProgramType(models.TextChoices):
        TRAITEMENT = 'Traitement'
        POST_TRAITEMENT = 'Post-Traitement'

    name = models.CharField(max_length=200, verbose_name="Nom du programme")
    exercices = models.ManyToManyField(Exercice, through="ExerciceRoutine")
    description = models.TextField(verbose_name="Description")
    type = models.CharField(choices=ProgramType.choices, max_length=200)
    date_creation = models.DateTimeField(auto_created=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Programme'
        verbose_name_plural = 'Programmes'

class Patient(models.Model):
    user = models.OneToOneField(User, verbose_name="Utilisateur", on_delete=models.PROTECT)
    phone = models.CharField(max_length=10, verbose_name="Téléphone", null=True, blank=True)
    programs = models.ManyToManyField(Program, null=True, blank=True)
    is_active = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"


    class Meta:
        verbose_name = 'Patient'
        verbose_name_plural = 'Patient'



class Media(models.Model):
    class MediaType(models.TextChoices):
        VIDEO = 'Video'
        PHOTO = 'Photo'
    name = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(choices=MediaType.choices, max_length=200)
    file = models.FileField(null=True, blank=True)
    date_creation = models.DateTimeField(auto_now=True)