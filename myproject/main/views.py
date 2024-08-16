from django.shortcuts import render
from django.http import HttpResponse
from .models import Country, Category, Tour
from django.views.generic.detail import DetailView


class ToursView(DetailView):
    model = Country
    template_name = 'tours.html'
    context_object_name = 'country'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['tours'] = Tour.objects.filter(country=self.object)
        context['category'] = Category.objects.all()
        return context

class TourDetailView(DetailView):
    model = Tour
    template_name = 'tour.html'
    context_object_name = 'tour'

def index(request):
    category = Category.objects.all()
    countries = Country.objects.all()
    return render(request, 'index.html', {'category': category, 'countries': countries})

def tours(request):
    category = Category.objects.all()
    tours = Tour.objects.all()
    return render(request, 'tours.html', {'category': category, 'tours': tours})

def about(request):
    return render(request, 'about.html')
