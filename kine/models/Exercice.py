from django.db import models


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