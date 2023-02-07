from datetime import datetime

from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))


data = {
    "Fairy": {
        "id": 1,
        "fname": "Tooth",
        "lname": "Fairy",
        "timestamp": get_timestamp(),
    },
    "Ruprecht": {
        "fname": "Knecht",
        "lname": "Ruprecht",
        "timestamp": get_timestamp(),
    },
    "Bunny": {
        "fname": "Easter",
        "lname": "Bunny",
        "timestamp": get_timestamp(),
    }
}


class ManAPI(Resource):
    def get(self):
        return data


class GetNameAPI(Resource):
    def get(self, name):
        return {"data": f"Hello {name}"}


api.add_resource(ManAPI, '/')
api.add_resource(GetNameAPI, '/hello/<string:name>/')

if __name__ == '__main__':
    app.run(debug=True)
