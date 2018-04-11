from .coderunner import *
from .formatter import *

import os
import shlex

from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse


# Create your views here.
class EditorView(View):
    def get(self, request, repo_name):
        """Shows the editor."""
        user = request.user
        repo_path = 'repo_'+ user.username + '_' + repo_name
        # Check if the repo_path exists

        # Check if the there is file inside repo_path/

        # If file exists, read the file and pass the content of the file back
        return render(request, "editor.html", {})

    def post(self, request):
        """Runs the user-entered code."""

        current_dir = os.path.dirname(os.path.realpath(__file__))

        if not os.path.isdir("workspace/" + str(request.user)):
            os.makedirs("workspace/" + str(request.user))

        os.chdir("workspace/" + str(request.user))

        code = request.POST.get("text")
        language = request.POST.get("language")
        filename = request.POST.get("filename")
        flags = request.POST.get("flags")

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

        os.chdir(current_dir)

        return HttpResponse(format(result))


class ProfileView(View):

    def get(self, request):
        """Shows the user profile."""

        return render(request, "profile.html", {})


class FilesView(View):

    def get(self, request):
        """Shows the user's files."""

        return render(request, "files.html", {})