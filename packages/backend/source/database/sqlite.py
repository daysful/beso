import sqlite3
import json

from source.constants import sqlite_database_path, users
from .collections import Collections, tables



def generate_tables(
    connection: sqlite3.Connection,
):
    sql_create_table_users = \
        f'''
        CREATE TABLE IF NOT EXISTS users
        (
            ID      VARCHAR(255) PRIMARY KEY     NOT NULL,
            NAME    VARCHAR(255)                 NOT NULL,
            KEY     VARCHAR(255)                 NOT NULL
        );
        '''
    connection.execute(sql_create_table_users)

    for table in tables:
        sql_create_table = \
            f'''
            CREATE TABLE IF NOT EXISTS {table}
            (
                ID              VARCHAR(255) PRIMARY KEY     NOT NULL,
                GENERATED_BY    TEXT                         NOT NULL,
                GENERATED_AT    INT                          NOT NULL,
                DATA            JSON                         NOT NULL
            );
            '''
        connection.execute(sql_create_table)


def generate_users(
    connection: sqlite3.Connection,
):
    for user in users:
        sqlite_insert(
            connection,
            Collections.users,
            user,
        )
        pass


def generate_sqlite_connection():
    connection = sqlite3.connect(sqlite_database_path)

    generate_tables(connection)
    generate_users(connection)

    return connection


def dict_factory(cursor, row):
    data: dict[str, any] = {}
    for index, column in enumerate(cursor.description):
        data[column[0].lower()] = row[index]
    return data


def sqlite_insert(
    connection: sqlite3.Connection,
    name: str,
    value: dict[str, any],
):
    if value.get('is_json'):
        sql = f'''
            INSERT INTO {name}(ID, GENERATED_BY, GENERATED_AT, DATA)
            VALUES(?, ?, ?, ?)
            '''

        data = value.copy()
        del data['id']
        del data['generated_by']
        del data['generated_at']
        del data['is_json']

        cursor = connection.cursor()
        cursor.execute(
            sql,
            (
                value['id'],
                value['generated_by'],
                value['generated_at'],
                json.dumps(data),
            ),
        )

        connection.commit()
    else:
        fields = ','.join(
            [ key.upper() for key in list(value.keys()) ],
        )
        questions_marks = ','.join(
            ['?'] * len(value.keys()),
        )

        sql = f'''
            INSERT INTO {name}({fields})
            VALUES({questions_marks})
            '''

        cursor = connection.cursor()
        cursor.execute(sql, tuple(value.values()))

        connection.commit()


def sqlite_get(
    connection: sqlite3.Connection,
    name: str,
    id: str,
):
    sql = f'''
        SELECT * FROM {name} WHERE ID="{id}"
        '''

    connection.row_factory = dict_factory

    cursor = connection.cursor()
    cursor.execute(sql)

    item = cursor.fetchone()
    return item
