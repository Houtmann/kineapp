import time

from django.db.models import Prefetch
from django.http import HttpResponse
from rest_framework import permissions, viewsets
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView

from kine.models import Program, Patient
from kine.serializers.initialDataSerializer import PatientSerializer, ProgramsSerializer


class InitialData(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    authentication_classes = [TokenAuthentication]

    def retrieve(self, request):
        user = self.request.user
        patient = Patient.objects.get(user=user)
        serializer = PatientSerializer(patient)
        time.sleep(1)
        return Response(serializer.data)


class ProgramsView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    serializer_class = ProgramsSerializer

    def get_queryset(self):
        time.sleep(1)
        program = Program.objects.filter(patient__user_id=self.request.user.id).prefetch_related("exerciceroutine_set")
        return program






