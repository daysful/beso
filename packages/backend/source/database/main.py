from source.constants import database_type

from .mongo import \
    generate_mongo_connection, \
    mongo_insert, \
    mongo_update, \
    mongo_get, \
    mongo_get_all, \
    mongo_remove
from .sqlite import \
    generate_sqlite_connection, \
    sqlite_insert, \
    sqlite_update, \
    sqlite_get, \
    sqlite_get_all, \
    sqlite_remove



def get_database_connection():
    if database_type == 'mongo':
        return generate_mongo_connection()
    else:
        return generate_sqlite_connection()

database = get_database_connection()


def insert(
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
        return mongo_insert(
            database,
            name,
            value,
        )
    else:
        return sqlite_insert(
            database,
            name,
            value,
        )


def update(
    name: str,
    id: str,
    data: dict[str, any],
):
    if database_type == 'mongo':
        return mongo_update(
            database,
            name,
            id,
            data,
        )
    else:
        return sqlite_update(
            database,
            name,
            id,
            data,
        )


def get(
    name: str,
    id: str,
    by: str | None = 'id',
) -> dict[str, any] | None:
    if database_type == 'mongo':
        return mongo_get(
            database,
            name,
            id,
            by,
        )
    else:
        return sqlite_get(
            database,
            name,
            id,
            by,
        )


def get_all(
    name: str,
    id: str,
    by: str | None = 'id',
) -> list[dict[str, any]] | None:
    if database_type == 'mongo':
        return mongo_get_all(
            database,
            name,
            id,
            by,
        )
    else:
        return sqlite_get_all(
            database,
            name,
            id,
            by,
        )


def remove(
    name: str,
    id: str,
):
    if database_type == 'mongo':
        return mongo_remove(
            database,
            name,
            id,
        )
    else:
        return sqlite_remove(
            database,
            name,
            id,
        )
