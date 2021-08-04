from django import forms
from .models import MailList

class EmailForm(forms.ModelForm):
    class Meta:
        model = MailList
        fields = ('email',)
        

