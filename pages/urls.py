from django.urls import path
from .views import BooksMentionedView, HomePageView, AboutPageView, BookListView, ReView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('resources/', BookListView.as_view(), name='resources'),
    path('books_mentioned/', BooksMentionedView.as_view(), name='books_mentioned'),
    path('reviews/', ReView.as_view(), name='reviews'),
]