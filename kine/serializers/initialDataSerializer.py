from django.contrib.auth.models import User
from rest_framework import serializers

from kine.models import Program, Patient


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Patient
        fields = ['user', 'phone', 'is_active', 'programs']
        depth = 2