from django.contrib import admin

# Register your models here.
from .models import Book, MailList, Review, Question
admin.site.register(Book)
admin.site.register(MailList)
admin.site.register(Review)
admin.site.register(Question)
