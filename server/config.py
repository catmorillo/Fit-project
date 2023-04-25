from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 

app = Flask(__name__)
api = Api(app)


app.config[ 'SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fit.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy()
migrate = Migrate(app, db)


