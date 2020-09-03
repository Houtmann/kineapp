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
        fields = ["exercice", "rep", "serie"]
        depth = 3


class ProgramsSerializer(serializers.Serializer):
    exerciceroutine_set = ExerciceRoutineSerializer(many=True)



class PatientSerializer(serializers.ModelSerializer):

    programs = ProgramsSerializer(many=True)



    class Meta:
        model = Patient
        fields = ['user', 'phone', 'is_active', "programs"]





