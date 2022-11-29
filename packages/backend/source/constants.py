import os

from source.utilities.general import \
    mkdir, \
    parse_users, \
    generate_id



production = not (os.environ.get('BESO_PRODUCTION', 'false').lower() == 'false')


# 'sqlite' or 'mongo' database
database_type = 'mongo' if os.environ.get('BESO_MONGO_CONNECTION_STRING', '') \
    else os.environ.get('BESO_DATABASE', 'sqlite')

database_name = os.environ.get('BESO_MONGO_DATABASE_NAME', 'BesoDB')


users = parse_users()

allow_user_registration = os.environ.get('BESO_ALLOW_USER_REGISTRATION', 'true').lower() == 'true'


jwt_secret = os.environ.get('BESO_JWT_SECRET', generate_id())


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

sqlite_database_path = os.path.join(data_directory, 'beso.db')


favicon_path = os.environ.get('BESO_FAVICON_PATH', './assets/favicon.ico')
