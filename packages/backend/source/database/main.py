from source.constants import database_type

from source.database.sqlite import generate_sqlite_connection
from source.database.mongo import generate_mongo_connection



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
        collection = database['beso'][name]
        collection.insert_one(value)
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

        cursor = database.cursor()
        cursor.execute(sql, tuple(value.values()))

        database.commit()
