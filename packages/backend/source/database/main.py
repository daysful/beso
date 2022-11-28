from source.constants import database_type

from source.database.sqlite import generate_sqlite_connection
from source.database.mongo import generate_mongo_connection

from .mongo import mongo_add
from .sqlite import sqlite_add



def get_database_connection():
    if database_type == 'mongo':
        return generate_mongo_connection()
    else:
        return generate_sqlite_connection()

database = get_database_connection()


def add(
    name: str,
    value: dict[str, any],
):
    """
        add(
            'betseWorlds',
            {
                "id": 'two',
                "name": 'three',
            },
        )
    """
    if database_type == 'mongo':
        mongo_add(
            database,
            name,
            value,
        )
    else:
        sqlite_add(
            database,
            name,
            value,
        )
