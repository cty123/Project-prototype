from .coderunner import *
from .formatter import *

import os
import shlex

from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse
from django.shortcuts import redirect

from users.models import UserProfile
from repository.models import Repository


class IndexView(View):
    def get(self, request):
        """Shows the intro page."""

        return render(request, "index.html")


class EditorView(View):
    def get(self, request, username, repo_name):
        """Shows the editor."""
        # Look for user
        user = request.user
        try:
            owner = UserProfile.objects.get(username=username)
            repo = Repository.objects.get(name=repo_name, user=owner)
        except UserProfile.DoesNotExist:
            return redirect('files')
        except Repository.DoesNotExist:
            return redirect('files')

        if not repo.shared_users.filter(username=user.username).exists() and not repo.user == user:
            return redirect('files')

        repo_path = "workspaces/repo_" + username + "_" + repo_name + "/"

        # Check if the repo_path exists
        if not os.path.isdir(repo_path):
            os.makedirs(repo_path)

        return render(request, "editor.html", {"path": repo_path, "repo_name": repo_name, "owner_username": owner.username})

    def post(self, request):
        """Runs the user-entered code."""

        code = request.POST.get("text")
        language = request.POST.get("language")
        filename = request.POST.get("filename")
        flags = request.POST.get("flags")
        path = request.POST.get("path")

        current_dir = os.path.dirname(os.path.realpath(__file__))
        base_dir = os.path.dirname(current_dir)

        new_path = os.path.join(base_dir, path)
        if not os.path.isdir(new_path):
            os.makedirs(new_path)

        os.chdir(new_path)

        flags = shlex.split(flags, posix=True)

        result = ""
        if language == "c":
            result = run_c(code, filename, flags)
        elif language == "cpp":
            result = run_cpp(code, filename, flags)
        elif language == "java":
            result = run_java(code, filename, flags)
        elif language == "python":
            result = run_python(code, filename, flags)

        os.chdir(os.path.dirname(current_dir))

        return HttpResponse(format(result))