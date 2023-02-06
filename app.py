from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)  # For API service
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)  # For database


class NoteModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    description = db.Column(db.String(1000))

    def __repr__(self):
        return self.title


# db.create_all()


class TestAPIService(Resource):
    def get(self):
        return {"data": "This is a test API."}


class GetNameAPI(Resource):
    def get(self, name):
        return {"data": f"Hello {name}"}


api.add_resource(TestAPIService, '/')
api.add_resource(GetNameAPI, '/hello/<string:name>/')

if __name__ == '__main__':
    app.run(debug=True)
