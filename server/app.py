from flask import Flask, request, session
from flask_restful import Resource, Api
from flask import app, User
from app import bcrypt
from flask_migrate import Migrate
# from flask.ext.bcrypt import BCrypt

#make_response, request
#from flask import Flask, jsonify, request,



@app.route('/') 
def root_route():
    return "Welcome to Fit to Flex!\n"

bcrypt = bcrypt(app)
api = Api(app) 

class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')


class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        user = User.query.filter(User.username ==username)

        password = request.get_json()['password']
        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
        return {'error': 'Invalid username or password'}, 401
api.add_resource(Login, '/login')

# TO LOGOUT: (backEnd)
class Logout(Resource):

    def delete(self): 
        session('user_id', None)
        return {'message':' Logged out successfully!'}, 200

api.add_resource(Logout, '/logout')




if __name__=='__main__':
    app.run(port = 5555, debug = True)







## PART OF THE FORM ##
# @app.route("http://localhost:3000", methods=["POST"])
# def form(User):
#     data = request.get_json()
#     print(data) # do something with the data here
#     return jsonify({"message": "Form submitted successfully"})

