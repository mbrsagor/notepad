# Notepad

> The notepad app for daily note for everyone flask API based service application which the api will use mobile application.

#### Installation to local or production server.

###### Setup
```bash
git clone https://github.com/mbrsagor/notepad.git
cd notepad
virtualenv venv --python=python3.10
source venv/bin/activate
```

##### Run:
```bash
python run app.py
```

#### Manual db migration
```bash
flask shell
from app import db
db.create_all() 
```

###### Resources:
```bash
https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/
```

##### ``Flask shell``:
```python
from app import NoteModel
note = NoteModel.query.all()
```

###### Stripe payment added
```python
"""
server.py
Stripe Sample.
Python 3.10 or newer required.
"""
import os
from flask import Flask, redirect, request

import stripe
# This is your test secret API key.
stripe.api_key = 'sk_test_51N2ynICoxSZeQbCGXEpJaIFFZJtfailSh2lQbMcXjI5tFSKS7HWjtawJjqobhqHjpHRK5bQAt1Si8E4zZFyZfuzC00lM275h7a'

app = Flask(__name__,
            static_url_path='',
            static_folder='public')

YOUR_DOMAIN = 'http://localhost:4242'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': '{{PRICE_ID}}',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success.html',
            cancel_url=YOUR_DOMAIN + '/cancel.html',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=4242)
```


```python
try:
    response = requests.get('http://api.open-notify.org/astros.json', timeout=5)
    response.raise_for_status()
    # Code here will only run if the request is successful
except requests.exceptions.HTTPError as errh:
    print(errh)
except requests.exceptions.ConnectionError as errc:
    print(errc)
except requests.exceptions.Timeout as errt:
    print(errt)
except requests.exceptions.RequestException as err:
    print(err)
```
