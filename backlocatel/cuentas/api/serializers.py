from rest_framework import serializers
from cuentas.models import Cuentas
usuario = serializers.StringRelatedField(read_only=True)
class CuentasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuentas
        fields = '__all__'
        
    def create(self, validated_data):
        return Cuentas.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.saldo = validated_data.get('saldo',instance.saldo)
        instance.save()
        return instance
        