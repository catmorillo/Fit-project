from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, app, bcrypt


# User, User Fitness Program, Fitness Program

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String) 
    _password_hash = db.Column(db.String, nullable = False)
    user_fitness_program = db.relationship("User_fitness_program", backref="user")
    assoc = association_proxy("user_fitness_programs", "fitness_program")

    @validates ('age')
    def validate_age(self, key, age_input):
        if age_input <17:
            raise ValueError("Must be older than 17 to Sign up")
        else: 
            return age_input 

    @hybrid_property
    def password_hash(self):
        return self.password_hash

    password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode9 ('utf-8'))
        self._password_hasg=password_hash.decode('utf-8')
        
    def authenticate (self, password):
        return bcrypt.check_password_hash(
        self._password_hash, password.encode('utf-8'))
    


#user_id and fitness_program_id/ Foreign Key
class User_fitness_program(db.Model, SerializerMixin):
    __tablename__="user_fitness_programs"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    user_id = db.Column( db.Integer, db.ForeignKey( 'users.id' ) )
    fitness_program_id = db.Column( db.Integer, db.ForeignKey( 'fitness_programs.id' ) )


class Fitness_program(db.Model, SerializerMixin):
    __tablename__='fitness_programs'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    bulking = db.Column(db.String)
    cutting = db.Column(db.String)
    strong_lean_build = db.Column(db.String)
    user_fitness_program = db.relationship("User_fitness_program", backref="Fitness_program")
    assoc = association_proxy("user_fitness_programs", "user" )



    

