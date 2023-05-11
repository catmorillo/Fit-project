from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from config import db, bcrypt


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False) 
    _password_hash = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(50), unique=True, nullable = False)
    # user_fitness_programs = db.relationship("UserFitnessProgram", backref="user")
    # assoc = association_proxy("user_fitness_programs", "fitness_program")
    # serialize_rules = ('userFitnessProgram.user',) 


    def __repr__(self):
        return f'User {self.username}, ID {self.id}'
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode ('utf-8'))
        self._password_hash=password_hash.decode('utf-8')
        
    def authenticate (self, password):
        return bcrypt.check_password_hash(
        self._password_hash, password.encode('utf-8'))
    
    @validates ('username')
    def validate_username(self, key, username_input):
        if not username_input:
            raise ValueError("username needs to be present")
        else: 
            return username_input 

#user_id and fitness_program_id/ Foreign Key
class UserFitnessProgram(db.Model, SerializerMixin):
    __tablename__="user_fitness_programs"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey( 'users.id' ) )
    fitness_program_id = db.Column( db.Integer, db.ForeignKey("fitness_programs.id"))
    serialize_rules = ('-fitness_program',) 

    user = db.relationship('User', backref=db.backref('user_fitness_programs', lazy=True))
    fitness_program = db.relationship('FitnessProgram', backref=db.backref('user_fitness_programs', lazy=True))
class FitnessProgram(db.Model, SerializerMixin):
    __tablename__='fitness_programs'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.Text)
    duration = db.Column(db.String(50), nullable=False)
    difficulty = db.Column(db.String(50), nullable=False)
    gym_frequency = db.Column(db.String(50), nullable=False)
    training_split = db.Column(db.String(50), nullable=False)

    # user_fitness_programs = db.relationship("UserFitnessProgram", backref="fitness_program")
    # assoc = association_proxy("user_fitness_programs", "user" )
    # serialize_rules = ('-userFitnessProgram.fitness_program', 'users')



    

