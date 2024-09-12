from django.db import models

# Create your models here.

class Priority(models.Model):
    name = models.CharField(max_length=50)

    
# 
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    pridoridad = models.ForeignKey(Priority, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.title

