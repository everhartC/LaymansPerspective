from django.http.response import JsonResponse
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import TemplateView, ListView
from .models import Book, Review, MailList
from .forms import EmailForm
import feedparser

# Create your views here.

class HomePageView(TemplateView):
    model = MailList
    template_name = 'home.html'
    # context_object_name = 'reviews'
    
    # def get_context_data(self, **kwargs):
    #     context = super(HomePageView, self).get_context_data(**kwargs)
    #     context['MailList'] = MailList.objects.all()
    #     context['Review'] = Review.objects.all()
    #     return context

    form_class = EmailForm

    def get(self, *args, **kwargs):
        form = self.form_class
        return render(self.request, self.template_name, {'form': form})

    def post(self, *args, **kwargs):
        if self.request.method == "POST" and self.request.is_ajax():
            form = self.form_class(self.request.POST)
        if form.is_valid():
            new_email = form.save(commit=False)
            new_email.save()
            return JsonResponse({"success": True}, status=200)
        return JsonResponse({"success": False}, status=400)
        

class AboutPageView(TemplateView):
    template_name = 'about.html'

class BookListView(ListView):
    template_name = 'resources.html'
    model = Book
    context_object_name = 'book_list'

class BooksMentionedView(ListView):
    template_name = 'booksMentioned.html'
    model = Book
    context_object_name = 'book_list'

class ReView(TemplateView):
    template_name = "reviews.html"
    # model = Review


def blogs(request):
    url = "https://www.goodreads.com/author/show/21662024.Dave_Foucar/blog?format=rss"
    feed = feedparser.parse(url)

    return render(request, 'blogArticles.html', {'feed': feed})
