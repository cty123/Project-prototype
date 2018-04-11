from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import View
from repository.models import Repository

import re


class RepositoryView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        user = request.user
        repos = Repository.objects.filter(user=user)
        repos = repos.extra(order_by=["name"])
        return render(request, 'files.html', {'repos': repos})

    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        repo_owner = request.user
        repo_name = request.POST.get("repo_name", "")

        # sanitize the repo name
        repo_name = repo_name.replace(" ", "_")
        repo_name = "".join([c for c in repo_name if re.match(r'\w', c)])

        repo = Repository(name=repo_name, user=repo_owner)
        repo.set_path()
        repo.save()
        print('repo path is' + repo.repo_path)
        return self.get(request=request)
