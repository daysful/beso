import sqlite3

from source.constants import sqlite_database_path



def generate_sqlite_connection():
    connection = sqlite3.connect(sqlite_database_path)

    sql_create_betseWorlds_table = \
        '''
        CREATE TABLE IF NOT EXISTS betseWorlds
        (
            ID INT PRIMARY KEY     NOT NULL,
            NAME           TEXT    NOT NULL
        );
        '''

    connection.execute(sql_create_betseWorlds_table)

    return connection


def sqlite_add(
    database,
    name: str,
    value: dict[str, any],
):
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

    cursor = database.cursor()
    cursor.execute(sql, tuple(value.values()))

    database.commit()
