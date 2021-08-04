from django.shortcuts import redirect, render
from django.views.generic import TemplateView, ListView
from .models import Book, Review, MailList
from .forms import EmailForm


# Create your views here.

class HomePageView(TemplateView):
    model = MailList
    template_name = 'home.html'

    form_class = EmailForm

    def get(self, request, *args, **kwargs):
        form = self.form_class
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save()
        return redirect('home')

class AboutPageView(TemplateView):
    template_name = 'about.html'

class BookListView(ListView):
    template_name = 'resources.html'
    model = Book
    context_object_name = 'book_list'

class ReView(TemplateView):
    template_name = "reviews.html"
    model = Review