import os

from source.utilities.general import \
    mkdir, \
    parse_users, \
    load_jwt_secret



production = not (os.environ.get('BESO_PRODUCTION', 'false').lower() == 'false')


# 'sqlite' or 'mongo' database
database_type = 'mongo' if os.environ.get('BESO_MONGO_CONNECTION_STRING', '') \
    else os.environ.get('BESO_DATABASE', 'sqlite')

database_name = os.environ.get('BESO_MONGO_DATABASE_NAME', 'BesoDB')


users = parse_users()

allow_user_registration = os.environ.get('BESO_ALLOW_USER_REGISTRATION', 'true').lower() == 'true'


directory_path = os.path.dirname(
    os.path.realpath(__file__),
)


betse_data_path = os.path.join(
    directory_path,
    'data/yaml',
)


data_directory = os.environ.get('BESO_DATA_DIRECTORY', './data')
mkdir(data_directory)

simulations_directory = os.path.join(data_directory, 'simulations')
mkdir(simulations_directory)

simulation_datastore = os.path.join(data_directory, 'simulations.json')
secrets_datastore = os.path.join(data_directory, 'secrets.json')

sqlite_database_path = os.path.join(data_directory, 'beso.db')


favicon_path = os.environ.get('BESO_FAVICON_PATH', './assets/favicon.ico')



jwt_secret = os.environ.get('BESO_JWT_SECRET', load_jwt_secret(secrets_datastore))
