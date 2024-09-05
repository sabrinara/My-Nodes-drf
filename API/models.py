from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100, default="Default Title")
    content = models.TextField(default="Default Content")
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes", default=1)


    def __str__(self):
        return self.title