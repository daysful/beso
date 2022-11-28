import os



# 'sqlite' or 'mongo'
database_type = os.environ.get('BESO_DATABASE', 'sqlite')


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

beso_data_directory = os.environ.get('BESO_SIMULATION_DATA_DIR', './beso_data')
mkdir(beso_data_directory)

simulations_directory = os.path.join(beso_data_directory, 'simulations')
mkdir(simulations_directory)

simulation_datastore = os.path.join(beso_data_directory, 'simulations.json')

sqlite_database_path = os.path.join(beso_data_directory, 'beso.db')


favicon_path = './assets/favicon.ico'
