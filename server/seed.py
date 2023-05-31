from app import app
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import db, FitnessProgram



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


if __name__ == '__main__':
    with app.app_context():
        fitnessProgram()
  

