from django.urls import path
from cuentas.api.views import create_cuenta,find_cuenta,find_cuenta_numero

urlpatterns = [
    path('cuenta/', create_cuenta, name='cuenta'),
    path('<int:pk>', find_cuenta, name='cuenta-id'),
    path('ncuenta/<int:ncuenta>', find_cuenta_numero, name='cuenta-numero'),
]
