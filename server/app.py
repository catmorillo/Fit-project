from flask import Flask
#make_response, request
# from flask_migrate import Migrate
from flask_restful import Resource, Api
from config import app 
from flask_cors import CORS
from flask import Flask, jsonify, request, session
# from login import LoginManager, UserMixin, login_user, logout_user, login_required
from models import db, user, user_fitness_program, fitness_program

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False




CORS(app)
migrate = Migrate(app, db)
db.init_app(app)
api = Api(app) 


class CheckSession(Resource):

    def get(self):
        user = user.query.filter(user.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')


if __name__=='__main__':
    app.run(port = 8000, debug = True)




















if __name__ == "__main__":
    app.run(debug=True)


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