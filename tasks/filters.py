from django_filters import rest_framework as filters
from .models import Task, Priority, Severidad

class TaskFilter(filters.FilterSet):
    priority = filters.ModelChoiceFilter(queryset=Priority.objects.all())
    severidad = filters.ModelChoiceFilter(queryset=Severidad.objects.all())
    done = filters.BooleanFilter()
    name = filters.CharFilter(field_name="title" ,lookup_expr="icontains")
    search = filters.CharFilter(method="busqueda")

    def busqueda(self,queryset,name,value):
        print(f"name: {name}, value: {value}")
        print(f"queryset: {queryset}")
        return queryset.filter(title__icontains=value)

    class Meta:
        model = Task
        fields = "__all__"
