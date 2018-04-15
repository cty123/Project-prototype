"""untitled1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from django.views.generic.base import RedirectView
from editor.views import EditorView, IndexView, EditorUpdateView
from users.views import LoginView, ProfileView, LogoutView, RegisterView
from repository.views import RepositoryView, RepositoryFileView, RepositorySharingView, RepositoryManageView

favicon_view = RedirectView.as_view(url='/static/favicon.ico', permanent=True)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^favicon\.ico$', favicon_view),
    url(r'^login/$', LoginView.as_view(), name='login'),
    url(r'^logout/$', LogoutView.as_view(), name='logout'),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^editor$', EditorView.as_view(), name='editor'),
    url(r'^profile/$', ProfileView.as_view(), name='profile'),
    url(r'^files/$', RepositoryView.as_view(), name='files'),
    url(r'^register/$', RegisterView.as_view(), name='register'),
    url(r'^editor/(?P<username>\w{0,20})/(?P<repo_name>\w{0,50})/$', EditorView.as_view(), name='e'),
    url(r'^repo_files$', RepositoryFileView.as_view(), name='repo_files'),
    url(r'^share/$', RepositorySharingView.as_view(), name='share'),
    url(r'^manage/$', RepositoryManageView.as_view(), name='manage_post'),
    url(r'^manage/(?P<owner_username>\w{0,20})/(?P<repo_name>\w{0,50})/$', RepositoryManageView.as_view(), name='manage'),
    url(r'^updater/$', EditorUpdateView.as_view(), name='updater')
]
