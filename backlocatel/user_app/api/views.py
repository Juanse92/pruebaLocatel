from rest_framework.decorators import api_view
from rest_framework.response import Response
from user_app.api.serializers import RegistrationSerializer
from rest_framework.authtoken.models import Token
from user_app import models
from rest_framework import status
from django.contrib.auth.models import User


@api_view(['POST'])
def logout_view(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            request.user.auth_token.delete()
            return Response({"message": "Usuario desconectado exitosamente"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "No se puede cerrar la sesión de un usuario no autenticado"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            account = serializer.save()
            data['response']='El registro fue exitoso'
            data['id']=account.id
            data['username']=account.username
            data['email']=account.email
            token=Token.objects.get(user=account).key
            data['token']=token
        else:
            data = serializer.errors
        return Response(data)

@api_view()
def find_usuario_username(request,name):
    usuario = User.objects.get(username=name)
    data={}
    try:
        data['id']=usuario.id
        data['username']=usuario.username
        data['email']=usuario.email
    except :
        data['response'] = 'Usuario no existe'
    return Response(data)