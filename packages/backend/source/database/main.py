from enum import StrEnum

from source.constants import database_type

from .mongo import generate_sqlite_connection, mongo_insert
from .sqlite import generate_mongo_connection, sqlite_insert



def get_database_connection():
    if database_type == 'mongo':
        return generate_mongo_connection()
    else:
        return generate_sqlite_connection()

database = get_database_connection()


class BetseCollections(StrEnum):
    worlds = 'betseWorlds',
    tissues = 'betseTissues',
    interventions = 'betseInterventions',
    modulators = 'betseModulators',
    networks = 'betseNetworks',
    biomolecules = 'betseBiomolecules',
    reactions = 'betseReactions',
    channels = 'betseChannels'

class Collections(StrEnum):
    users = 'users',
    betse = BetseCollections()


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
