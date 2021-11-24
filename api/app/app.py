import requests
from api.app import urls

class App(object):

    def __init__(self):
        print("The development server has been started.")
    

    def query_params(self, api_url, query):
        return requests.get(urls.BASE_URL+api_url, params=query)

    def create(link, value=dict):
        response = requests.post(urls.CREATE_API_URL+link, data=value)
        return response

    def update(link, value=dict):
        requests.put(urls.CREATE_API_URL+link, data=value)

    def check_error():
        response = requests.get(urls.BASE_URL+'astros.json')
        if response.status_code == 200:
            print("The request was a success!")
            # Code here will only run if the request is successful
        elif response.status_code == 404:
            print("Result not found!")
            # Code here will react to failed requests

    def raise_for_status():
        try:
            response = requests.get(urls.BASE_URL+'astros.json')
            response.raise_for_status()
        except requests.exceptions.HTTPError as error:
            print(error)
    
    def time_out():
        try:
            response = requests.get(urls.BASE_URL+'astros.json', timeout=0.00001)
        except requests.Timeout as error:
            print(error)



app = App()

# get method quey params
query = {'lat':'45', 'lon':'180'}
params = app.query_params('iss-pass.json', query)
# print(params)


# Post response send data to server
_data = {'key': 'Hello Sagor'}
_create = app.create('post', _data)
print(_create)
