from flask import Flask, request, session
# from flask_migrate import Migrate
from flask_restful import Resource, Api
from config import app 
from flask import session
from models import User
#make_response, request
#from flask import Flask, jsonify, request, 
@app.route('/') 
def root_route():
    return "hi there!\n"
#login



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
        username = request.json.get('username')
        password = request.json.get('password')

        if username =='myusername' and password =='mypassword':
            session['user_id'] = 1
            return {'message': 'Logged in!'}, 200
        else:
            return {'message': "Invalid username or password"}, 401 
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








# A DIFFERENT METHOD TO LOGIN
# app.secret_key = 'your_secret_key'

# class User(UserMixin):
#     def __init__(self, id, username, password):
#         self.id = id
#         self.username = username
#         self.password = password

#     def __repr__(self):
#         return f'<User {self.username}>'
# login_manager = LoginManager()
# login_manager.init_app(app)

# def load_user(user_id):
#     return User(user_id)

# app.route('/login', methods=['POST'])
# def login():
#     username = request.form.get('username')
#     password = request.form.get('password')

#     if not username or password != username.password:
#         return jsonify({'message': 'Invalid username or password'}), 401
    
#     login_user(user)
#     return jsonify({'message': 'Login successful!'}), 200


# #@app.route('/logout)
# @login_required
# def logout():
#     logout_user()
#     return jsonify({'message': 'Logged out successfully!'}), 200

# #protected endpoint 
# #@app.route('/'
# @login_required
# def protected():
#     return jsonify({'message': 'Protected endpoint accessed successfully!'}), 200

# if __name__ == '__main__':
#     app.run()