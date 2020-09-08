from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from kine.models import Program, Patient, ExerciceRoutine, Exercice


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class ExerciceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercice
        fields = "__all__"
        depth = 3


class ExerciceRoutineSerializer(serializers.ModelSerializer):
    exercice = ExerciceSerializer

    class Meta:
        model = ExerciceRoutine
        fields = ["exercice", "rep", "serie", "ris"]
        depth = 3


class ProgramsSerializer(serializers.ModelSerializer):
    exercices = ExerciceRoutineSerializer(source='exerciceroutine_set', many=True)
    class Meta:
        model = Program
        fields = ['id', 'name', 'description', 'type', 'exercices']


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['user', 'phone', 'is_active']
