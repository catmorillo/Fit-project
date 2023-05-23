from app import app
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import db, User, UserFitnessProgram, FitnessProgram



def fitnessProgram():
    FitnessProgram.query.delete()
    fps_data = [ 
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
    for data in fps_data:
        fps = FitnessProgram(**data)

        db.session.add(fps)
        db.session.commit()
 # fitness_programs.append(fitness_program)

  
    #  user = User(**user_data)
    # user.append(user)
    # db.session.add_all(user)
    # db.session.commit()
    # for i in range(50):
    #     user = User(
    #     name=user.name,
    #     age=random.randint(17, 90),
    # )

# def make_user_fitness_programs():
# users = [    {'name': "Joe", 'age': 18},    {'name': "Cat", 'age': 24},    {'name':"Dave", 'age': 32},    {'name':"Beverly", 'age': 22},    {'name':"Jackie", 'age': 52}]

# for i, user in enumerate(users):
#     user['id'] = i + 1

# def userFitnessProgram():

#     userFitnessProgram.query.delete()
    

#     ufp_data = [ 
#         {
#         'name': "Joe",
#         'description': "Fitness Program for Joe"
#         'age': 44
#         },
#         {"name": "Cat", 
#         'description': "Fitness Program for Cat"
#         'age': 18
#         },
#         {
#         "name": "Dave",
#         "description": "Fitness Program for Jackie"
#         "age": 22
#         },
#         {"name": "Beverly",
#         'description': "Fitness Program for Beverly"
#         'age': 21
#         },
#         {"name":"Jackie",
#         "description": "Fitness Program for Jackie"
#         "age": "43"
#         }
#     ]
#     for data in ufp_data:
#         ufp = userFitnessProgram(**data)
     

#         db.session.add(ufp)
#         db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        fitnessProgram()
        # userFitnessPrograms()


    # user_fitness_programs.append(user_fitness_programs)


#     User_fitness_program.query.delete()
#     users = User.query.with_entities(User.id).all()
#     fitness_programs = Fitness_program.query.with_entities(Fitness_program.id).all()
#     user_fitness_programs = []


# def make_users():
#     User.query.delete()
#     users = []


# User, User Fitness Program, Fitness Program

