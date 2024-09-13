# models.py
from django.db import models

# Modelo Priority
class Priority(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

# Modelo Severidad
class Severidad(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name

# Modelo tareas
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    priority = models.ForeignKey(Priority, on_delete=models.CASCADE, default=1)
    severidad = models.ForeignKey(Severidad, on_delete=models.CASCADE, default=1)  # Añadido el campo severidad

    def __str__(self):
        return self.title
