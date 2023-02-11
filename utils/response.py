def prepare_success_response(data):
    """ prepare success response for all serializer """
    response = {
        'status': True,
        'message': 'Data successfully returned',
        'data': data
    }
    return response


def prepare_error_response(message):
    """ prepare error response for all serializer """
    response = {
        'status': False,
        'message': message
    }
    return response


def prepare_create_success_response():
    """ prepare success response for all serializer """
    response = {
        'status': True,
        'message': 'Data Successfully created'
    }
    return response


def prepare_update_success_response(msg):
    """ prepare success response for all serializer """
    response = {
        'status': True,
        'message': msg
    }
    return response
