from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from django.views.generic import View
from users.forms import RegisterForm
from users.models import UserProfile
from django.shortcuts import redirect
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
            return redirect('profile')
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
        email = request.POST.get("email", "")
        password = request.POST.get("password", "")
        password_confirm = request.POST.get("password_confirm", "")
        user = request.user
        if nick_name.strip() != "":
            user.nick_name = nick_name.strip()
        if email.strip() != "":
            user.email = email.strip()
        #if password.strip() != "" and password == password_confirm:
        #    user.password = password
        user.save()
        return render(request, 'profile.html', {})


class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('login')

    def post(self, request):
        logout(request)
        return redirect('login')


class RegisterView(View):
    def post(self, request):
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            user_name = request.POST.get("username", "")
            pass_word = request.POST.get("password", "")
            nick_name = request.POST.get("nickname", "")
            email = request.POST.get("email", "")

            user_profile = UserProfile()
            user_profile.username = user_name
            user_profile.email = email
            user_profile.password = make_password(pass_word)
            user_profile.nick_name = nick_name
            user_profile.save()
            return render(request, 'registration/login.html', {'reg_msg': 'Account created, please login!'})
        else:
            print(register_form.errors)
            return render(request, 'registration/login.html', {'reg_msg': register_form.errors})



