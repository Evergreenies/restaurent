from django.conf.urls import url
from . import views


app_name = 'tablebook'

urlpatterns = [
    url(r'^$', views.HomeView.as_view(), name='home'),
    url(r'^Create-table/$', views.BookView.as_view(), name='Create-table'),

]
