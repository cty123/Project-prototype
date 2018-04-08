from django import forms


class RegisterForm(forms.Form):
    username = forms.CharField(required=True)
    password = forms.CharField(required=True, min_length=6)
    password_repeat = forms.CharField(required=True, min_length=6)
    email = forms.EmailField(required=True)
    nickname = forms.CharField(required=True)
