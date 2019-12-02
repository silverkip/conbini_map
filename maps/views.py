from django.shortcuts import render

def home(request):

  context = {

  }

  return render(request, 'maps/home.html', context)