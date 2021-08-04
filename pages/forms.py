from django import forms
from .models import MailList
from bulma_widget import widgets

class EmailForm(forms.ModelForm):
    # email = forms.CharField(label="")
    def __init__(self, *args, **kwargs):
        super(EmailForm, self).__init__(*args, **kwargs)
        self.fields['email'].label = ""
    class Meta:
        model = MailList
        fields = ['email']
        
        widgets = {
            'email': widgets.BulmaTextInput(attrs={'class': 'input', 'type': 'email', 'placeholder': 'Enter Email'}),
            'email': forms.EmailInput(attrs={
                'class': 'input',
                'placeholder': 'Enter Email'})
        }
