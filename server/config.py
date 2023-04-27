from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 
# from flask_cors import CORS
# from models import db
app = Flask(__name__)
app.config[ 'SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fit.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# CORS(app)
# migrate = Migrate(app, db)


api = Api(app)



db = SQLAlchemy()



