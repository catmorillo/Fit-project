from flask import Flask
#make_response, request
# from flask_migrate import Migrate
# from flask_restful import Resource, Api
from config import app 
# from flask_cors import CORS


if __name__=='__main__':
    app.run(port = 8000, debug = True)