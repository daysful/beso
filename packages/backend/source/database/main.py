from enum import StrEnum

from source.constants import database_type

from .mongo import \
    generate_mongo_connection, \
    mongo_insert
from .sqlite import \
    generate_sqlite_connection, \
    sqlite_insert



def get_database_connection():
    if database_type == 'mongo':
        return generate_mongo_connection()
    else:
        return generate_sqlite_connection()

database = get_database_connection()


class Collections(StrEnum):
    users = 'users',
    betseWorlds = 'betseWorlds',
    betseTissues = 'betseTissues',
    betseInterventions = 'betseInterventions',
    betseModulators = 'betseModulators',
    betseNetworks = 'betseNetworks',
    betseBiomolecules = 'betseBiomolecules',
    betseReactions = 'betseReactions',
    betseChannels = 'betseChannels'


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
        mongo_insert(
            database,
            name,
            value,
        )
    else:
        sqlite_insert(
            database,
            name,
            value,
        )
