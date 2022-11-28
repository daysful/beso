import sqlite3

from source.constants import sqlite_database_path



def generate_sqlite_connection():
    connection = sqlite3.connect(sqlite_database_path)
    return connection
