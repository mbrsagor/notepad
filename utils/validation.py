from wtforms import StringField, validators

# Define a custom validator function
def custom_validator(form, field):
    if len(field.data) < 5:
        raise validators.ValidationError('Input must be at least 5 characters long')

# Define a Flask form with a StringField and a custom validator
class MyForm(FlaskForm):
    my_field = StringField('My Field', validators=[validators.InputRequired(), custom_validator])
