# python-api
> Python APIs consume and development web server.


##### Setup the project in your local dev server:

- 1st install python3 in your development environment

```bash
https://github.com/mbrsagor/python-api.git
cd python-api
virtualenv venv --python=python3.8
source venv/bin/active
pip install -r requirements.txt
```

#### How to Make Robust API Requests example:
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
