from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse


class HomeView(generic.TemplateView):
    template_name = 'tablebook/home1.html'


class BookView(generic.TemplateView):
    template_name = 'tablebook/booking.html'
