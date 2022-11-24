import os



directory_path = os.path.dirname(
    os.path.realpath(__file__),
)


betse_data_path = os.path.join(
    directory_path,
    'data/yaml',
)


simulation_directory = os.environ.get('BETESK_SIMULATION_DATA_DIR', './simulation_data')
simulation_datastore = os.path.join(simulation_directory, 'data')
