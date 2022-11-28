import os



# 'sqlite' or 'mongo' database
database_type = 'mongo' if os.environ.get('BESO_MONGO_CONNECTION_STRING', '') \
    else os.environ.get('BESO_DATABASE', 'sqlite')


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
