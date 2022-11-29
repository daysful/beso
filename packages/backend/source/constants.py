import os



production = not (os.environ.get('BESO_PRODUCTION', 'false').lower() == 'false')


# 'sqlite' or 'mongo' database
database_type = 'mongo' if os.environ.get('BESO_MONGO_CONNECTION_STRING', '') \
    else os.environ.get('BESO_DATABASE', 'sqlite')

database_name = os.environ.get('BESO_MONGO_DATABASE_NAME', 'BesoDB')


def parse_users():
    """
    parse user tuples (`id,name,key`) separated by semicolon from environment variable
    e.g. `BESO_USERS="123,user1,key1;124,user2,key2"`
    """
    users_string = os.environ.get('BESO_USERS', '')
    if not users_string:
        return []

    users = []
    for user_string in users_string.split(';'):
        user_data = user_string.split(',')
        try:
            if isinstance(user_data[0], str) and \
               isinstance(user_data[1], str) and \
               isinstance(user_data[2], str):
                users.append({
                    'id': user_data[0],
                    'name': user_data[1],
                    'key': user_data[2],
                })
        except:
            pass

    return users

users = parse_users()

allow_user_registration = os.environ.get('BESO_ALLOW_USER_REGISTRATION', 'true').lower() == 'true'


directory_path = os.path.dirname(
    os.path.realpath(__file__),
)


betse_data_path = os.path.join(
    directory_path,
    'data/yaml',
)


def mkdir(dir: str):
    if not os.path.exists(dir):
        os.mkdir(dir)

data_directory = os.environ.get('BESO_DATA_DIRECTORY', './data')
mkdir(data_directory)

simulations_directory = os.path.join(data_directory, 'simulations')
mkdir(simulations_directory)

simulation_datastore = os.path.join(data_directory, 'simulations.json')

sqlite_database_path = os.path.join(data_directory, 'beso.db')


favicon_path = './assets/favicon.ico'
