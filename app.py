from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api

from messages import SUCCESS_MSG, ERROR_MSG, DATA_RENDER_SUCCESS, DATA_RENDER_FAIL, NOTE_UPDATE_MSG, NOTE_DELETE_MSG

app = Flask(__name__)
api = Api(app)  # For API service
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notepad.db'
db = SQLAlchemy(app)  # For database


class NoteModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    description = db.Column(db.String(1000))

    def __repr__(self):
        return f'<NoteModel {self.title}>'


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


class GetNoteByIDAPIView(Resource):
    response = {"status": 404, "message": DATA_RENDER_SUCCESS}

    def get(self, note_id):
        note = NoteModel.query.filter_by(id=note_id).first()
        if note:
            notepad_details = {
                'id': note.id,
                'title': note.title,
                'description': note.description,
            }
            self.response["status"] = 200
            self.response["data"] = notepad_details
            return self.response, 200
        else:
            return self.response, 404


class NoteUpdateAPIView(Resource):
    response = {"status": 404, "message": ERROR_MSG}

    def put(self, note_id):
        note = NoteModel.query.filter_by(id=note_id).first()
        if note:
            data = request.get_json()
            title = data['title']
            description = data['description']
            note.title = title
            note.description = description
            db.session.commit()
            self.response["status"] = 200
            self.response["message"] = NOTE_UPDATE_MSG
            return self.response, 200
        else:
            return self.response, 404


class DeleteNoteAPIView(Resource):
    response = {"status": 404, "message": ERROR_MSG}

    def delete(self, note_id):
        note = NoteModel.query.filter_by(id=note_id).first()
        if note:
            db.session.delete(note)
            db.session.commit()
            self.response["status"] = 200
            self.response["message"] = NOTE_DELETE_MSG
            return self.response, 200
        else:
            return self.response, 404


api.add_resource(NotePadAPIList, '/')
api.add_resource(CreateNoteAPIView, '/create/')
api.add_resource(GetNoteByIDAPIView, '/note/<int:note_id>/')
api.add_resource(NoteUpdateAPIView, '/note-update/<int:note_id>/')
api.add_resource(DeleteNoteAPIView, '/note-delete/<int:note_id>/')

if __name__ == '__main__':
    app.run(debug=True)
