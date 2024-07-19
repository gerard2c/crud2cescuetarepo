from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')], null=True)
    birthday = models.DateField(null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=10, choices=[('Single', 'Single'), ('Married', 'Married'), ('Divorced', 'Divorced'), ('Widowed', 'Widowed')], null=True)
    religion = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    fathers_first_name = models.CharField(max_length=100, null=True)
    fathers_middle_name = models.CharField(max_length=100, null=True)
    fathers_last_name = models.CharField(max_length=100, null=True)
    fathers_occupation = models.CharField(max_length=100, null=True)
    mothers_first_name = models.CharField(max_length=100, null=True)
    mothers_middle_name = models.CharField(max_length=100, null=True)
    mothers_last_name = models.CharField(max_length=100, null=True)
    mothers_occupation = models.CharField(max_length=100, null=True)
    elementary = models.CharField(max_length=100, null=True)
    secondary = models.CharField(max_length=100, null=True)
    vocational_trade_course = models.CharField(max_length=100, null=True)
    college_course_program = models.CharField(max_length=100, null=True)
    emergency_contact_name = models.CharField(max_length=100, null=True)
    emergency_contact_relationship = models.CharField(max_length=50, null=True)
    emergency_contact_phone = models.CharField(max_length=20, null=True)
    emergency_contact_address = models.CharField(max_length=200, null=True)

    def __str__(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"