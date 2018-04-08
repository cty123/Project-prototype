from .coderunner import *

from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse


# Create your views here.
class EditorView(View):

    def get(self, request):
        """Shows the editor."""

        return render(request, "editor.html", {})

    def post(self, request):
        """Runs the user-entered code."""

        code = request.POST.get("text")
        language = request.POST.get("language")
        flags = request.POST.get("flags")

        if language == "c":
            result = run_c(code, flags)
        elif language == "python":
            result = run_python(code, flags)

        return HttpResponse(result)


class ProfileView(View):

    def get(self, request):
        """Shows the user profile."""

        return render(request, "profile.html", {})


class FilesView(View):

    def get(self, request):
        """Shows the user's files."""

        return render(request, "files.html", {})