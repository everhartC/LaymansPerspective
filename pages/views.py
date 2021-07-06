from typing import List
from django.views.generic import TemplateView, ListView
from .models import Book

# Create your views here.

class HomePageView(TemplateView):
    template_name = 'home.html'
    

class AboutPageView(TemplateView):
    template_name = 'about.html'


class BookListView(ListView):
    template_name = 'resources.html'
    model = Book
    context_object_name = 'book_list'