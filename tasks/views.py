# views.py
from rest_framework import viewsets
from .models import Task, Priority, Severidad
from .serializer import TaskSerializer, PrioritySerializer, SeveridadSerializer
from .filters import TaskFilter
from django_filters import rest_framework as filters

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TaskFilter

class PriorityView(viewsets.ModelViewSet):
    serializer_class = PrioritySerializer
    queryset = Priority.objects.all()

class SeveridadView(viewsets.ModelViewSet):
    serializer_class = SeveridadSerializer
    queryset = Severidad.objects.all()
