from rest_framework import serializers
from .models import Task, Priority, Severidad

class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields = ['id', 'name']

class SeveridadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Severidad
        fields = ['id', 'name']

class TaskSerializer(serializers.ModelSerializer):
    priority = serializers.PrimaryKeyRelatedField(queryset=Priority.objects.all())
    severidad = serializers.PrimaryKeyRelatedField(queryset=Severidad.objects.all())

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'done', 'priority', 'severidad']
