import sqlite3
import json

from source.constants import sqlite_database_path



def generate_tables(
    connection: sqlite3.Connection,
):
    sql_create_betseWorlds_table = \
        '''
        CREATE TABLE IF NOT EXISTS betseWorlds
        (
            ID INT PRIMARY KEY     NOT NULL,
            DATA           JSON    NOT NULL
        );
        '''

    connection.execute(sql_create_betseWorlds_table)


def generate_sqlite_connection():
    connection = sqlite3.connect(sqlite_database_path)

    generate_tables(connection)

    return connection


def sqlite_insert(
    database,
    name: str,
    value: dict[str, any],
):
    sql = f'''
        INSERT INTO {name}(ID, DATA)
        VALUES(?, ?)
        '''

    cursor = database.cursor()
    cursor.execute(sql, (value['id'], json.dumps(value)))

    database.commit()
