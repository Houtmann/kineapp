import time

from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView

from kine.models import Program, Patient
from kine.serializers.initialDataSerializer import PatientSerializer


class InitialData(APIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication,)

    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):
        time.sleep(1)
        snippets = Patient.objects.filter(user=self.request.user)
        serializer = PatientSerializer(snippets, many=True)
        return Response(serializer.data)

