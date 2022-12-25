import os

from pymongo import MongoClient

from source.constants import database_name



def generate_mongo_connection():
    CONNECTION_STRING = os.environ.get('BESO_MONGO_CONNECTION_STRING')
    connection = MongoClient(CONNECTION_STRING)
    return connection


def mongo_insert(
    database: MongoClient,
    name: str,
    value: dict[str, any],
):
    collection = database[database_name][name]
    collection.insert_one(value)
    return True


def mongo_update(
    database: MongoClient,
    name: str,
    id: str,
    data: dict[str, any],
):
    collection = database[database_name][name]
    collection.update_one(
        {
            "id": id,
        },
        {
            "data": data,
        },
    )
    return True


def mongo_get(
    database: MongoClient,
    name: str,
    id: str,
    key = 'id',
):
    collection = database[database_name][name]
    filter = {}
    filter[key] = id
    item = collection.find_one(filter)

    return item


def mongo_get_all(
    database: MongoClient,
    name: str,
    id: str,
    key = 'id',
):
    collection = database[database_name][name]
    filter = {}
    filter[key] = id
    items = collection.find(filter)

    return items


def mongo_remove(
    database: MongoClient,
    name: str,
    id: str,
):
    collection = database[database_name][name]
    filter = {
        'id': id,
    }
    collection.delete_one(filter)

    return True
