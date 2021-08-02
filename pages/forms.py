from django import forms
from django.forms import widgets
from .models import MailList

class EmailForm(forms.ModelForm):
    class Meta:
        model = MailList
        fields = ['email']
        widgets = {
            'email':  forms.TextInput(attrs={
                'id': 'post-text',
                'required': True,
                'placeholder': 'Say Something...'
            }),
        }

