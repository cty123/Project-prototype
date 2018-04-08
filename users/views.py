from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate, login, logout
from django.views.generic import View
# Create your views here.


class LoginView(View):
    def get(self, request):
        return render(request, "registration/login.html", {})
    def post(self, request):
        user_name = request.POST.get("username", "")
        pass_word = request.POST.get("password", "")
        user = authenticate(username=user_name, password=pass_word)
        if user is not None:
            login(request, user)
            return render(request, "profile.html")
        else:
            return render(request, "registration/login.html", {"msg": "Invalid username or password"})

class ProfileView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        user = request.user
        nick_name = user.nick_name
        return render(request, 'profile.html', {})

    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        nick_name = request.POST.get("nickname", "")
        user = request.user
        user.nick_name = nick_name
        user.save()
        return render(request, 'profile.html', {})


class LogoutView(View):
    def get(self, request):
        logout(request)
        return render(request, 'registration/login.html', {})

    def post(self, request):
        logout(request)
        return render(request, 'registration/login.html', {})
