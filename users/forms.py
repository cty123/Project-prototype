from django import forms
from users.models import UserProfile

class RegisterForm(forms.Form):
    username = forms.CharField(required=True)
    password = forms.CharField(required=True, min_length=6)
    password_repeat = forms.CharField(required=True, min_length=6)
    email = forms.EmailField(required=True)
    nickname = forms.CharField(required=True)

    class Meta:
        model = UserProfile
        fields = ['username', 'password', 'password_repeat', 'email', 'nickname']

    def clean(self):
        cleaned_data = super(RegisterForm, self).clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("password_repeat")
        username = cleaned_data.get("username")

        if password != confirm_password:
            raise forms.ValidationError(
                "password and confirm_password does not match"
            )

        if UserProfile.objects.filter(username=username).exists():
            raise forms.ValidationError(
                "User already exist"
            )