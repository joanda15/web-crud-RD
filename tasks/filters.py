# filters.py
from django_filters import rest_framework as filters
from .models import Task, Priority, Severidad

class TaskFilter(filters.FilterSet):
    priority = filters.ModelChoiceFilter(queryset=Priority.objects.all())
    severidad = filters.ModelChoiceFilter(queryset=Severidad.objects.all())
    done = filters.BooleanFilter()

    class Meta:
        model = Task
        fields = ['title', 'done', 'priority', 'severidad']
