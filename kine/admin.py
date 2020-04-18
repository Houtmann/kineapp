from django.contrib import admin
from django.contrib.admin import register
from django.forms import forms

from kine.models import Exercice, ExerciceRoutine, Program, Patient, Media


class ExerciceInline(admin.TabularInline):
    model = Program.exercices.through
    extra = 0
    verbose_name = 'Exercice'
    verbose_name_plural = 'Exercice'
    autocomplete_fields = ('exercice',)

@register(Exercice)
class ExerciceAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('pk', 'name')

@register(ExerciceRoutine)
class ExerciceRoutineAdmin(admin.ModelAdmin):
    list_display = ('pk', 'exercice','serie', 'rep', 'ris')
    search_fields = ('exercice',)
    autocomplete_fields = ['exercice']

@register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('name', 'type')
    search_fields = ('name',)
    inlines = [ExerciceInline, ]

class ProgrmInline(admin.TabularInline):
    model = Patient.programs.through
    extra = 0
    verbose_name = 'Programme'
    verbose_name_plural = 'Programmes'
    autocomplete_fields = ('program',)

@register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone')
    inlines = [ProgrmInline, ]

    # def numbers_programs(self, obj):
    #     obj.

@register(Media)
class MediaAdmin(admin.ModelAdmin):
    list_display = ('name', 'type')

