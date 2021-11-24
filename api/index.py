import requests

response = requests.get("http://api.open-notify.org/astros.json")

"""
response.content() # Return the raw bytes of the data payload
response.text() # Return a string representation of the data payload
response.json() # This method is convenient when the API returns JSON

Keyword arguments:
argument -- description
Return: return_description
"""

query = {'lat':'45', 'lon':'180'}
response = requests.get('http://api.open-notify.org/iss-pass.json', params=query)
print(response.json())

print(response)
