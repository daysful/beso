import os

from pymongo import MongoClient



def generate_mongo_connection():
    CONNECTION_STRING = os.environ.get('BESO_MONGO_CONNECTION_STRING')
    connection = MongoClient(CONNECTION_STRING)
    return connection
