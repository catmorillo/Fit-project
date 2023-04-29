from models import db, User, User_fitness_program, Fitness_program
from app import app 
# from faker import Faker 
from random import choice as radint 

# fake = Faker()

def make_fitness_programs():
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
    # fitness_programs.append(fitness_program)
    db.session.add_all(programs)
    db.session.commit()


def make_user():
    users = [
        {
        "name":"Joe"
        },
         {
        "name":"Cat"
        },
         {
        "name":"Dave"
        },
         {
        "name":"Beverly"
        },
         {
        "name":"Jackie"
        }
    ]
    
    for i in range(50):
        user = User(
            name :(''),
            age = radint(17,90),
        )
        
    users.append(user)  
    db.session.add_all(users)
    db.session.commit()



def make_user_fitness_programs():
    user_fitness_programs =[]

    # user_fitness_programs.append(user_fitness_programs)
    db.session.add_all(user_fitness_programs)
    db.session.commit()
 

#     User_fitness_program.query.delete()
#     users = User.query.with_entities(User.id).all()
#     fitness_programs = Fitness_program.query.with_entities(Fitness_program.id).all()
#     user_fitness_programs = []


# def make_users():
#     User.query.delete()
#     users = []


# User, User Fitness Program, Fitness Program

if __name__ == '__main__':
    with app.app_context():
        make_user_fitness_programs()
        make_user()     
        make_fitness_programs()