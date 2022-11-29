import os

from pymongo import MongoClient

from source.constants import database_name



def generate_mongo_connection():
    CONNECTION_STRING = os.environ.get('BESO_MONGO_CONNECTION_STRING')
    connection = MongoClient(CONNECTION_STRING)
    return connection


def mongo_insert(
    database,
    name: str,
    value: dict[str, any],
):
    collection = database[database_name][name]
    collection.insert_one(value)
