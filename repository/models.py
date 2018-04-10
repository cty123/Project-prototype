from django.db import models
from users.models import UserProfile
from datetime import datetime
# Create your models here.


def user_repo_path(self):
    return 'repo_{0}_{1}'.format(self.user.username, self.name)


class Repository(models.Model):
    name = models.CharField(max_length=50, null=False, verbose_name='repository Name')
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, verbose_name='Owner')
    repo_path = models.FilePathField(default='')
    date = models.DateField(default=datetime.now)

    class Meta:
        verbose_name = "repository"
        verbose_name_plural = verbose_name

    def set_path(self):
        path = user_repo_path(self)
        self.repo_path = path