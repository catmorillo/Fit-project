from models import User, UserFitnessProgram, FitnessProgram
from flask import Flask, request, session, make_response, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import app, db, api
from sqlalchemy.ext.associationproxy import association_proxy



@app.route('/Home') 
def root_route():
    return "Welcome to Fit to Flex!\n"


@app.route('/signUp', methods=['POST'])
def signup(): 
    data = request.get_json()
    existing_user = User.query.filter_by(username=data['username']).first()
    if existing_user:
        return jsonify({'message': 'Username already taken'}), 409
    
    new_user = User(username=data['username'], password=data['password'], email=data['email'])
    
    if new_user:
        return jsonify({'message': 'User created successfully'}), 201
    db.session.add(new_user)
    db.session.commit()

api.add_resource(signup, '/signup')    

class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')

# LOGIN  (BACKEND)
class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        user = User.query.filter(User.username ==username).first()
        if not user: 
            return {'error': 'Invalid username or password'}, 401

        password = request.get_json()['password']
        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
api.add_resource(Login, '/login')

# TO LOGOUT: (backEnd)
class Logout(Resource):

    def delete(self): 
        session('user_id', None)
        return {'message':' Logged out successfully!'}, 200

api.add_resource(Logout, '/logout')

class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return make_response(
            users,
            200
        )
    def post (self):
        data = request.get_json()
        try:
            new_user = User(
                name=data['name'],
                age=data['age'],
            )
        except:
            return make_response({'error': 'Invalid username or password'},400)
        db.session.add(new_user)
        db.session.commit()
        return make_response(new_user.to_dict(), 201)
api.add_resource(Users, '/users')

class UserById(Resource):
    def get(self, id):
        user = User.query.filter_by(id = id).first()
        if not user:
            return make_response({'error': 'User not found'},404)
        else:
            return make_response(user.to_dict(), 200)
    
    def patch(self, id):
        data = request.get_json()
        user = User.query.fitler_by(id = id).first()
        try:
            for attr in data:
                setattr(user, attr, data[attr])
        except ValueError:
            return make_response(
                {'error': 'Invalid'}, 400)
        db.session.add(user)
        db.session.commit()
        return make_response(user.to_dict(), 202)
    
    def delete(self, id):
        user =User.query.filter_by(id = id).first()
        if not user:
            return make_response({'error': 'User not found'}, 404)
        else:
            db.session.delete(user)
            db.session.commit()
        return make_response({}, 204)
api.add_resource(UserById, '/users/<int:id>')  

app.route('/user')
def get_user():
    users = [
        {'id': 1, 'name': "Joe", 'age': 18},
        {'id': 2, 'name': "Cat", 'age': 24},
        {'id': 3, 'name':"Dave", 'age': 32},
        {'id': 4, 'name':"Beverly", 'age': 22},
        {'id': 5, 'name':"Jackie", 'age': 52} 
        ]
    return jsonify(users)
@app.route('/userFitnessProgram')
def get_user_fitness_programs():
    programs = [
        {'name': "Joe", 'description': "Fitness Program for Joe"},
        {'name': "Cat", 'description': "Fitness Program for Cat"},
        {'name': "Dave", 'description': "Fitness Program for Jackie"},
        {'name': "Beverly", 'description': "Fitness Program for Beverly"},
        {'name':"Jackie", 'description': "Fitness Program for Jackie"}
    ]
    return jsonify(programs)

@app.route('/fitnessProgram')
def get_fitness_programs():
    programs = [
           {
        "name": "Cutting",
        "description": "Lose body fat, enhance strength, and achieve your ideal body composition",
        "duration": "12 weeks",
        "difficulty": "Intermediate/Advanced",
        "gym_frequency": "5 x per week",
        "training_split": "Lower Push, Upper Push, Lower Pull, Upper Pull, Full Body"
        },
        {
        "name": "Bulking",
        "description": "Gain serious lean muscle mass and greatly enhance overall strength using pregressive overload",
        "duration": "12 weeks",
        "difficulty": "Intermediate/Advanced",
        "gym_frequency": "5 x per week",
        "training_split": "Lower Push, Upper Push, Lower Pull, Upper Pull, Full Body"
        },
        {
        "name": "Strong Lean Build",
        "description": "Increase total body strength and build muscle",
        "duration": "12 weeks",
        "difficulty": "Beginner",
        "gym_frequency": "5 x per week",
        "training_split": "Lower Push, Upper push, Lower pull, Upper pull, Full lower"
        } 
    ]
    return jsonify(programs)
    

if __name__=='__main__':
    app.run(port = 5555, debug = True)







# SIGN UP 

# @app.route('/signUp', methods=['POST'])
# def signup(): 
#     data = request.get_json()
#     existing_user = User.query.filter_by(username=data['username']).first()
#     if not existing_user:
#         return jsonify({'message': 'Username already taken'}), 409
    
#     new_user = User(username=data['username'], password=data['password'], email=data['email'])
#     if new_user:
#         return jsonify({'message': 'User created successfully'}), 201
#     db.session.add(new_user)
#     db.session.commit()

# api.add_resource(signup, '/signUp')   













## PART OF THE FORM ##
# @app.route("http://localhost:3000", methods=["POST"])
# def form(User):
#     data = request.get_json()
#     print(data) # do something with the data here
#     return jsonify({"message": "Form submitted successfully"})

