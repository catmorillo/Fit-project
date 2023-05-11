from models import User, FitnessProgram, UserFitnessProgram
from flask import Flask, request, session, make_response
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import app, db, api
from sqlalchemy.ext.associationproxy import association_proxy





@app.route('/Home') 
def root_route():
    return "Welcome to Fit to Flex!\n"



class Signup(Resource):
    def post(self): 
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if user:
            return make_response({'error': 'Username or email already exists'}, 422)
            # return jsonify({'error': 'Username or email already exists'}), 409
        try:
            new_user = User(
                username=data['username'],
                password_hash=data['password'],
                email=data['email']
            )
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return make_response(new_user.to_dict(), 201)
        except:
            return make_response({'error': 'Could not create user'}, 422) 

api.add_resource(Signup, '/signup')    


class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id ==session.get('user_id')).first()
        if user:
            return make_response(user.to_dict(), 200)
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')

# LOGIN (BACKEND)
class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        user = User.query.filter(User.username ==username).first()
        if not user: 
            return {'error': 'Invalid username or password'}, 401

        password = request.get_json()['password']
        if user.authenticate(password):
        
            session['user_id'] = user.id

            return make_response(user.to_dict(),  200)
        else: 
            return {'error': 'Invalid username or password'}, 401

api.add_resource(Login,'/login')

# TO LOGOUT: (backEnd)
class Logout(Resource):

    def delete(self): 
        session('user_id', None)
        return {'message':' Logged out successfully!'}, 200

api.add_resource(Logout, '/logout')

class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return make_response(users, 200)
    
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
api.add_resource(Users,'/users')

# class UserById(Resource):
#     def get(self, id):
#         user = User.query.filter_by(id = id).first()
#         if not user:
#             return make_response({'error': 'User not found'},404)
#         else:
#             return make_response(user.to_dict(), 200)
    
#     def patch(self, id):
#         data = request.get_json()
#         user = User.query.fitler_by(id = id).first()
#         try:
#             for attr in data:
#                 setattr(user, attr, data[attr])
#         except ValueError:
#             return make_response(
#                 {'error': 'Invalid'}, 400)
#         db.session.add(user)
#         db.session.commit()
#         return make_response(user.to_dict(), 202)
    
#     def delete(self, id):
#         user =User.query.filter_by(id = id).first()
#         if not user:
#             return make_response({'error': 'User not found'}, 404)
#         else:
#             db.session.delete(users)
#             db.session.commit()
#         return make_response({}, 204)
# api.add_resource(UserById, '/users/<int:id>')  


# class User_Fitness_Programs(Resource):
#   def get(self):
#    


class FitnessPrograms(Resource):
    def get(self):
        fitness_programs = [f.to_dict() for f in FitnessProgram.query.all()] 
        return make_response(
            fitness_programs,
            200  
        ) 
    def post(self):
        data = request.get_json()
        try:
            prog = FitnessProgram (
                name= data['name'],
                description= data ['description'],
                duration= data ['duration'],
                difficulty =data ['difficulty'],
                gym_frequency= data['gym_frequency'],
                training_split= data ['training_split']
            )  
        except: 
            return make_response({'error': '400 validation error'} ,400)
        db.session.add(prog)
        db.session.commit()
        return make_response( prog.to_dict(), 201) 


api.add_resource(FitnessPrograms,'/fitness_programs')   

    # fitness_programs = FitnessProgram.query.all()
        # fitness_programs = [{'id': program.id, 'name': program.name} for program in fitness_programs]
        # return fitness_programs
    # db.session.add(fitness_program)  
    # db.session.commit()

    

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

