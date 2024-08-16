from django.urls import path
from main import views
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('about', views.about, name='about'),
    path('tours/<int:pk>', views.ToursView.as_view(), name='tours'),
    path('tours/tour/<int:pk>', views.TourDetailView.as_view(), name='tour'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
