from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import View
from django.http import HttpResponse
from repository.models import Repository
from users.models import UserProfile

import re
import os


class RepositorySharingView(View):
    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        user = request.user
        shared_username = request.POST.get("shared_username", "")
        repo_name = request.POST.get("repo_name", "")
        
        try:
            repo = Repository.objects.get(name=repo_name, user=user)
            shared_user = UserProfile.objects.get(name=shared_username)
        except UserProfile.DoesNotExist:
            return HttpResponse("User " + shared_username + " does not exist")
        except Repository.DoesNotExist:
            return HttpResponse("Repository " + repo_name + " does not exist")

        repo.shared_users.add(shared_user)
        return HttpResponse("Repository " + repo_name + " is successfully shared to " + shared_username)


class RepositoryView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        user = request.user
        repos = Repository.objects.filter(user=user)
        repos = repos.extra(order_by=["name"])
        shared_repos = Repository.objects.filter(shared_users=user)
        shared_repos = shared_repos.extra(order_by=["name"])
        return render(request, 'files.html', {'repos': repos, 'shared_repos': shared_repos})

    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        repo_owner = request.user
        repo_name = request.POST.get("repo_name", "")

        # sanitize the repo name
        repo_name = repo_name.replace(" ", "_")

        # Check if a repository with same already exists
        if not Repository.objects.filter(name=repo_name, user=repo_owner).exists():
            repo_name = "".join([c for c in repo_name if re.match(r'\w', c)])
            repo = Repository(name=repo_name, user=repo_owner)
            repo.set_path()
            repo.save()
            print('repo path is' + repo.repo_path)
            return self.get(request=request)
        else:
            user = request.user
            repos = Repository.objects.filter(user=user)
            repos = repos.extra(order_by=["name"])
            return render(request, 'files.html', {'repos': repos, 'err_msg': 'Repository "' + repo_name + '" already exists'})


class RepositoryFileView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        """Gets the files in a repository."""

        path = request.GET.get("path", "")
        mode = request.GET.get("mode", "")

        if mode == "list":
            files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and not os.access(os.path.join(path, f), os.X_OK)]
            files.sort()

            formatted_files = "<ul>"
            for file in files:
                formatted_files += "<li><a class=\"c-link file_open_item\">" + file + "</a></li>"
            formatted_files += "</ul>"

            return HttpResponse(formatted_files)

        else:
            filename = request.GET.get("filename", "")

            f = open(os.path.join(path, filename), "r")
            text = f.read()
            f.close()

            return HttpResponse(text)

    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        """Saves a file to the directory."""

        path = request.POST.get("path", "")
        filename = request.POST.get("filename", "")
        text = request.POST.get("text")

        f = open(os.path.join(path, filename), "w")
        f.write(text)
        f.close()

        return HttpResponse("File saved")
