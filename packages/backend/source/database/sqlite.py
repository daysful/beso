import sqlite3
import json

from source.constants import sqlite_database_path
from .collections import tables



def generate_tables(
    connection: sqlite3.Connection,
):
    sql_create_table_users = \
        f'''
        CREATE TABLE IF NOT EXISTS users
        (
            ID INT PRIMARY KEY     NOT NULL,
            NAME           TEXT    NOT NULL
        );
        '''
    connection.execute(sql_create_table_users)

    for table in tables:
        sql_create_table = \
            f'''
            CREATE TABLE IF NOT EXISTS {table}
            (
                ID INT PRIMARY KEY     NOT NULL,
                GENERATED_BY   TEXT    NOT NULL,
                GENERATED_AT   INT     NOT NULL,
                DATA           JSON    NOT NULL
            );
            '''
        connection.execute(sql_create_table)


def generate_sqlite_connection():
    connection = sqlite3.connect(sqlite_database_path)

    generate_tables(connection)

    return connection


def sqlite_insert(
    database,
    name: str,
    value: dict[str, any],
):
    if value['is_json']:
        sql = f'''
            INSERT INTO {name}(ID, GENERATED_BY, GENERATED_AT, DATA)
            VALUES(?, ?, ?, ?)
            '''

        cursor = database.cursor()
        cursor.execute(
            sql,
            (
                value['id'],
                value['generated_by'],
                value['generated_at'],
                json.dumps(value),
            ),
        )

        database.commit()
    else:
        pass
