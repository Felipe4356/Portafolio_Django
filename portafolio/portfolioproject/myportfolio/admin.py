from django.contrib import admin

# Register your models here.

from .models import Categoria, Tecnologia, Proyecto

admin.site.register(Categoria)

admin.site.register(Tecnologia)

admin.site.register(Proyecto)
