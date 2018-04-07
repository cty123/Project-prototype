import subprocess

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

        f = open("test.c", "w+")
        f.write(code)
        f.close()
        p = subprocess.Popen(["gcc","-o", "test", "test.c"], stdout=subprocess.PIPE)
        p.wait()
        p = subprocess.Popen(["./test"], stdout=subprocess.PIPE)
        p.wait()
        result = p.stdout.read().decode("utf-8")
        return HttpResponse(result)


class ProfileView(View):

    def get(self, request):
        """Shows the user profile."""

        return render(request, "profile.html", {})