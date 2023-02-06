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
