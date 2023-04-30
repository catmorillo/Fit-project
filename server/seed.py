from app import app
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import db, User, UserFitnessProgram, FitnessProgram
import random

ufp= UserFitnessProgram
# def make_fitness_programs():
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
for fp_data in programs:
        fp = FitnessProgram(**fp_data, user_fitness_program_id=ufp.id)

    # fitness_programs.append(fitness_program)
db.session.add_all(programs)
db.session.commit()


# def make_user():
users = [
        {'name': "Joe", 'age': 18},
        {'name': "Cat", 'age': 24},
        {'name':"Dave", 'age': 32},
        {'name':"Beverly", 'age': 22},
        {'name':"Jackie", 'age': 52}
    ]
for user_data in users:
     user = User(**user_data)
users.append(user)
db.session.add_all(users)
db.session.commit()

for i in range(50):
    user = User(
        name=user.name,
        age=random.randint(17, 90),
    )

# def make_user_fitness_programs():
user_fitness_programs =[
     {'name': "Joe", 'description': "Fitness Program for Joe"},
     {'name': "Cat", 'description': "Fitness Program for Cat"},
     {'name': "Dave", 'description': "Fitness Program for Jackie"},
     {'name': "Beverly", 'description': "Fitness Program for Beverly"},
     {'name':"Jackie", 'description': "Fitness Program for Jackie"}
]
for ufp_data in user_fitness_programs:
     ufp = UserFitnessProgram(**ufp_data, user_id=user.id)

db.session.add_all(user_fitness_programs)
db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        user_fitness_programs()
        users()
        programs()


    # user_fitness_programs.append(user_fitness_programs)


#     User_fitness_program.query.delete()
#     users = User.query.with_entities(User.id).all()
#     fitness_programs = Fitness_program.query.with_entities(Fitness_program.id).all()
#     user_fitness_programs = []


# def make_users():
#     User.query.delete()
#     users = []


# User, User Fitness Program, Fitness Program

