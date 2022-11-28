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
