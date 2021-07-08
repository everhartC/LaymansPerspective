from django.urls import path
from .views import HomePageView, AboutPageView, BookListView, ReView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('resources/', BookListView.as_view(), name='resources'),
    path('reviews/', ReView.as_view(), name='reviews'),
]