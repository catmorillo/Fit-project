from models import db, User, User_fitness_program, Fitness_program
from app import app 


def make_user_fitness_programs():

    User_fitness_program.query.delete()
    users = User.query.with_entities(User.id).all()
    fitness_programs = Fitness_program.query.with_entities(Fitness_program.id).all()
    user_fitness_programs = []


# ADD TO fitness_programs:
# (cutting) Lose body fat, enhance strength, and achieve your ideal body composition. 12 Weeks, Intermediate/ Advanced, Gym 5 x per week
# Training split. Lower Push, Upper Push, lower Pull, Upper Pulll, full body.


# (bulking)   Gain serious lean muscle mass and greatly enhance overall strength. 12 Weeks, Intermediate/ Advanced, Gym 5 x per week 
# Training split.  Lower Push, Upper push, Lower pull, upper pull, full body



#(strong lean build) ncrease total body strength and build muscle. 12 Weeks, Intermediate/ Advanced ,Gym 5 x per week
#Training Split: Lower Push, Upper push, Lower pull, Upper pull, full lower 
def make_fitness_programs():
    Fitness_program.query.delete()
    fitness_programs = ['Bulking', 'Cutting','Lean Build']









def make_users():
    User.query.delete()
    users = []


# User, User Fitness Program, Fitness Program

if __name__ == '__main__':
    with app.app_context():
        make_user_fitness_programs()
        make_users()     
        make_fitness_programs()