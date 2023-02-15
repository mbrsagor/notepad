from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api

from messages import ERROR_MSG, DATA_RENDER_FAIL, NOTE_UPDATE_MSG, NOTE_DELETE_MSG
from utils.response import prepare_success_response, prepare_error_response, prepare_create_success_response, \
    prepare_update_success_response

app = Flask(__name__)
api = Api(app)  # For API service
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notepad.db'
db = SQLAlchemy(app)  # For database


class NoteModel(db.Model):
    """
    Notepad db model
    """
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    description = db.Column(db.String(1000))

    def __repr__(self):
        return f'<NoteModel {self.title}>'


class NotePadAPIList(Resource):

    """
    List of notepad API endpoint
    """

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
            return prepare_success_response(notes)
        else:
            return prepare_error_response(DATA_RENDER_FAIL)


class CreateNoteAPIView(Resource):
    """
    Create notepad API
    """
    def post(self):
        data = request.get_json()
        title = data["title"]
        description = data["description"]
        notepad = NoteModel(title=title, description=description)
        db.session.add(notepad)
        db.session.commit()
        return prepare_create_success_response()


class NoteDetailAPIView(Resource):
    """
    Notepad details API
    """
    def get(self, note_id):
        note = NoteModel.query.filter_by(id=note_id).first()
        if note:
            notepad_details = {
                'id': note.id,
                'title': note.title,
                'description': note.description,
            }
            return prepare_success_response(notepad_details)
        else:
            return prepare_error_response(ERROR_MSG)


class NoteUpdateAPIView(Resource):
    """
    Notepad update API
    """
    def put(self, note_id):
        note = NoteModel.query.filter_by(id=note_id).first()
        if note:
            data = request.get_json()
            title = data['title']
            description = data['description']
            note.title = title
            note.description = description
            db.session.commit()
            return prepare_update_success_response(NOTE_UPDATE_MSG)
        else:
            return prepare_error_response(ERROR_MSG)


class DeleteNoteAPIView(Resource):
    """
    Notepad delete API endpoint
    """
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


# Router/route
api.add_resource(NotePadAPIList, '/')
api.add_resource(CreateNoteAPIView, '/create/')
api.add_resource(NoteDetailAPIView, '/note/<int:note_id>/')
api.add_resource(NoteUpdateAPIView, '/note-update/<int:note_id>/')
api.add_resource(DeleteNoteAPIView, '/note-delete/<int:note_id>/')

if __name__ == '__main__':
    app.run(debug=True)
