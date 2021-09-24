from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, null=True, blank=True)
    author = models.CharField(max_length=200)
    link = models.URLField(max_length=200, null=True, blank=True)
    publisher = models.CharField(max_length=200, null=True, blank=True)
    isbn = models.CharField(max_length=13, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Review(models.Model):
    description = models.TextField(null=True, blank=True)
    rating = models.IntegerField(default=5)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return (self.name, self.description)

class MailList(models.Model):
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email


class Question(models.Model):
    #* Small group chapter questions
    part = models.IntegerField()
    chapter = models.IntegerField()
    number = models.IntegerField()
    q = models.TextField()
    answer = models.CharField(max_length=30, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return (f"Ch{self.chapter}, Question {self.number}: {self.q} -{self.answer}-")