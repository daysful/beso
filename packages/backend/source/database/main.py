from source.constants import database_type

from source.database.sqlite import generate_sqlite_connection
from source.database.mongo import generate_mongo_connection



def get_database_connection():
    if database_type == 'mongo':
        return generate_mongo_connection()
    else:
        return generate_sqlite_connection()
