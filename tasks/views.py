# views.py
from rest_framework import viewsets
from .models import Task
from .serializer import TaskSerializer
from .filters import TaskFilter
from django_filters import rest_framework as filters

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TaskFilter
