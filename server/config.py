from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 
from flask_cors import CORS

app = Flask(__name__)
app.config[ 'SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fit.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy()
CORS(app)
migrate = Migrate(app, db)
db.init_app( app )
api = Api(app)

# app.json.compact = False









