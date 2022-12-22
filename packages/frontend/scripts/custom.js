// Edit file based on the project requirements.


const esModules = [
    // add dependencies to be bundled as ES modules
    // string or (dependency: string): string
    'js-yaml',
];


const externals = [
    // add dependencies to be left as external to the server
    // string or (dependency: string): string
];


const environment = {
    // add environment variables replacements for frontend, e.g.
    // 'process.env.ENV_NAME': JSON.stringify(process.env.ENV_NAME || ''),
    'process.env.BESO_BACKEND': JSON.stringify(process.env.BESO_BACKEND || ''),
    'process.env.BESO_BACKEND_GRAPHQL': JSON.stringify(process.env.BESO_BACKEND_GRAPHQL || ''),
    'process.env.BESO_FRONTEND': JSON.stringify(process.env.BESO_FRONTEND || ''),
};



exports.esModules = esModules;
exports.externals = externals;
exports.environment = environment;
