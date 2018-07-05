from django.contrib import admin
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('api/token-auth/', obtain_auth_token),
    path('admin/', admin.site.urls),
    path(r'', views.FrontendAppView.as_view())
]
