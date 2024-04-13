from django.urls import path
from cuentas.api.views import create_cuenta,find_cuenta

urlpatterns = [
    path('cuenta/', create_cuenta, name='cuenta'),
    path('<int:pk>', find_cuenta, name='cuenta-id'),
]
