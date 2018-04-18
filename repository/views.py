from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.utils.decorators import method_decorator
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from repository.models import Repository
from users.models import UserProfile

import re
import os
import shutil


class RepositorySharingView(View):
    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        user = request.user
        owner_username = request.POST.get("owner_username", "")
        shared_username = request.POST.get("shared_username", "")
        repo_name = request.POST.get("repo_name", "")

        # Check if the operator is the owner
        if not owner_username == user.username:
            return HttpResponse("You must be the owner of a repository to share it with another user!")

        if owner_username == shared_username:
            return HttpResponse("You are already the owner of this repository")

        try:
            repo = Repository.objects.get(name=repo_name, user=user)
            shared_user = UserProfile.objects.get(username=shared_username)

            if repo.shared_users.filter(username=shared_username).exists():
                return HttpResponse("You have already shared this repository to " + shared_username)

            repo.shared_users.add(shared_user)
        except UserProfile.DoesNotExist:
            return HttpResponse("User \"" + shared_username + "\" does not exist")
        except Repository.DoesNotExist:
            return HttpResponse("Repository \"" + repo_name + "\" does not exist")

        return HttpResponse("Repository \"" + repo_name + "\" is now shared with " + shared_user.nick_name + " (" + shared_username + ")")


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
        repo_user = request.POST.get("repo_user", "")
        repo_name = request.POST.get("repo_name", "")
        mode = request.POST.get("mode", "")

        if mode == "leave":
            owner = UserProfile.objects.get(username=repo_user)
            repo = Repository.objects.get(name=repo_name)
            repo.shared_users.remove(request.user)
            repo.save()
            return HttpResponse("removed")

        # sanitize the repo name
        repo_name = repo_name.replace(" ", "_")
        repo_name = "".join([c for c in repo_name if re.match(r'\w', c)])

        # Check if a repository with same already exists
        if not Repository.objects.filter(name=repo_name, user=repo_owner).exists() and repo_name != "":
            repo = Repository(name=repo_name, user=repo_owner)
            repo.set_path()
            repo.save()
            os.makedirs(os.path.join("workspaces", repo.repo_path))
            return self.get(request=request)
        else:
            user = request.user
            repos = Repository.objects.filter(user=user)
            repos = repos.extra(order_by=["name"])
            shared_repos = Repository.objects.filter(shared_users=user)
            shared_repos = shared_repos.extra(order_by=["name"])
            return render(request, 'files.html', {'repos': repos, 'shared_repos': shared_repos, 'err_msg': 'Repository "' + repo_name + '" already exists'})


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
                formatted_files += "<li><a class=\"c-link file_open_item\">" + file + "</a> <a style=\"cursor: pointer; color: red\" class=\"file_delete_item\">&times;</a></li>"
            formatted_files += "</ul>"

            if len(files) == 0:
                formatted_files = "<p>No files yet!</p>"

            return HttpResponse(formatted_files)

        elif mode == "file":
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
        mode = request.POST.get("mode", "")

        if mode == "save":
            text = request.POST.get("text", "")

            f = open(os.path.join(path, filename), "w")
            f.write(text)
            f.close()

            return HttpResponse("File saved")

        elif mode == "delete":

            os.remove(os.path.join(path, filename))

            return HttpResponse("File deleted")


class RepositoryManageView(View):

    @method_decorator(login_required(login_url='login'))
    def get(self, request, owner_username, repo_name):
        user = request.user
        try:
            owner = UserProfile.objects.get(username=owner_username)
            # If the acting user is not the owner of the repository
            if user != owner:
                # Redirect to previous page
                return redirect('files')
            repo = Repository.objects.get(name=repo_name, user=user)
            return render(request, 'manage.html', {"repo": repo, "repo_name": repo_name, "user": user})
        except UserProfile.DoesNotExist:
            # Redirect to previous page
            return redirect('files')
        except Repository.DoesNotExist:
            # Redirect to previous page
            return redirect('files')

    @method_decorator(login_required(login_url='login'))
    def post(self, request):

        mode = request.POST.get("mode", "")
        repo_name = request.POST.get("repo_name", "")
        user = request.POST.get("user", "")

        owner = UserProfile.objects.get(username=user)

        if mode == "rename":

            new_name = request.POST.get("new_name", "")
            repo = Repository.objects.get(name=repo_name, user=owner)
            old_path = repo.repo_path

            new_name = new_name.replace(" ", "_")
            new_name = "".join([c for c in new_name if re.match(r'\w', c)])

            if new_name == "":
                return HttpResponse("Invalid repository name")
            if Repository.objects.filter(name=new_name, user=owner).exists():
                return HttpResponse("Repository \"" + repo_name + "\" already exists")

            repo.name = new_name
            repo.set_path()
            new_path = repo.repo_path
            repo.save()

            base = "workspaces/"
            if os.path.isdir(os.path.join(base, old_path)):
                shutil.move(os.path.join(base, old_path), os.path.join(base, new_path))

            return HttpResponse("renamed")

        elif mode == "delete":

            repo = Repository.objects.get(name=repo_name, user=owner)
            repo.delete()

            base = "workspaces/"
            if os.path.isdir(os.path.join(base, repo.repo_path)):
                shutil.rmtree(os.path.join(base, repo.repo_path))

            return HttpResponse("deleted")

        elif mode == "transfer":

            new_owner_name = request.POST.get("new_owner_name", "")

            try:
                new_owner = UserProfile.objects.get(username=new_owner_name)
                repo = Repository.objects.get(name=repo_name, user=request.user)
                repo.user = new_owner
                old_path = repo.repo_path
                repo.set_path()
                repo.shared_users.add(request.user)
                repo.shared_users.remove(new_owner)
                repo.save()

                base = "workspaces/"
                if os.path.isdir(os.path.join(base, old_path)):
                    shutil.move(os.path.join(base, old_path), os.path.join(base, repo.repo_path))

                return HttpResponse("transferred")
            except UserProfile.DoesNotExist:
                return HttpResponse("User \"" + new_owner_name + "\" does not exist")


class RepositoryRefreshView(View):

    @method_decorator(login_required(login_url='login'))
    def get(self, request):

        user = request.user
        repo_name = request.GET.get("repo_name", "")

        repo = Repository.objects.get(name=repo_name, user=user)

        return JsonResponse(serializers.serialize("json", repo.shared_users.all()), safe=False)

    @method_decorator(login_required(login_url='login'))
    def post(self, request):

        user = request.user
        repo_name = request.POST.get("repo_name", "")
        shared_username = request.POST.get("username", "")

        repo = Repository.objects.get(name=repo_name, user=user)
        shared_user = UserProfile.objects.get(username=shared_username)

        repo.shared_users.remove(shared_user)
        repo.save()

        return HttpResponse("removed user")
