import time

from django.db.models import Prefetch
from django.http import HttpResponse
from rest_framework import permissions, viewsets
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView

from kine.models import Program, Patient
from kine.serializers.initialDataSerializer import PatientSerializer


class InitialData(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    authentication_classes = [TokenAuthentication]



    def retrieve(self, request, pk=None):
        user = self.request.user
        patient = Patient.objects.prefetch_related(Prefetch('programs', queryset=Program.objects.filter().prefetch_related("exerciceroutine_set__exercice"))).get(user=user)
        serializer = PatientSerializer(patient)
        return Response(serializer.data)









