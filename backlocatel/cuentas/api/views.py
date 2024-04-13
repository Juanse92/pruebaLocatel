from rest_framework.response import Response
from cuentas.models import Cuentas
from cuentas.api.serializers import CuentasSerializer
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def create_cuenta(request):
    if request.method == 'POST':
        cuenta = CuentasSerializer(data=request.data)
        if cuenta.is_valid():
            cuenta.save()
            return Response(cuenta.data)
        else:
            return Response(cuenta.errors, status=400)
        
# @permission_classes((IsAuthenticated))

@api_view(['GET', 'PUT'])
def find_cuenta(request,pk):
    if request.method == 'GET':
        cuenta = Cuentas.objects.get(usuario=pk)
        serializer = CuentasSerializer(cuenta)
        return Response(serializer.data)
    if request.method == 'PUT':
        cuenta = Cuentas.objects.get(pk=pk)
        cuenta2 = CuentasSerializer(cuenta,data=request.data)
        if cuenta2.is_valid():
            cuenta2.save()
            return Response(cuenta2.data)
        else:
            return Response(cuenta.errors, status=400)
        

    
