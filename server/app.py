from flask import Flask
# from flask_migrate import Migrate
from flask_restful import Resource, Api
from config import app 
from flask import Flask, jsonify, request, session
from models import User
#make_response, request

@app.route('/') 
def root_route():
    return "hi there!\n"




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