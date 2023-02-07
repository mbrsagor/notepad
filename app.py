from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api

from messages import SUCCESS_MSG, ERROR_MSG, DATA_RENDER_SUCCESS, DATA_RENDER_FAIL

app = Flask(__name__)
api = Api(app)  # For API service
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notepad.db'
db = SQLAlchemy(app)  # For database


class NoteModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    description = db.Column(db.String(1000))


class NotePadAPIList(Resource):

    def get(self):
        notepads = NoteModel.query.all()
        if notepads:
            notes = []
            for note in notepads:
                notepad_details = {
                    'id': note.id,
                    'title': note.title,
                    'description': note.description,
                }
                notes.append(notepad_details)
            response = {
                'status': 200,
                'message': DATA_RENDER_SUCCESS,
                'data': notes
            }
            return response
        else:
            return {"status": 404, "message": DATA_RENDER_FAIL}


class CreateNoteAPIView(Resource):
    response = {"status": 400, "message": ERROR_MSG}

    def post(self):
        data = request.get_json()
        title = data["title"]
        description = data["description"]
        notepad = NoteModel(title=title, description=description)
        db.session.add(notepad)
        db.session.commit()
        self.response["status"] = 201
        self.response["message"] = SUCCESS_MSG
        return self.response, 201


class GetNameAPI(Resource):
    def get(self, name):
        return {"data": f"Hello {name}"}


api.add_resource(NotePadAPIList, '/')
api.add_resource(CreateNoteAPIView, '/create/')
api.add_resource(GetNameAPI, '/hello/<string:name>/')

if __name__ == '__main__':
    app.run(debug=True)
