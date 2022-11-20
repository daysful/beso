// Edit file based on the project requirements.


const esModules = [
    // add dependencies to be bundled as ES modules
    // string or (dependency: string): string
];


const externals = [
    // add dependencies to be left as external to the server
    // string or (dependency: string): string
];


const environment = {
    'process.env.BETEKS_BACKEND': JSON.stringify(process.env.BETEKS_BACKEND || ''),
};



exports.esModules = esModules;
exports.externals = externals;
exports.environment = environment;
