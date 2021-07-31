const nextEnv = require('next-env');
const dotEnvLoad = require('dotenv-load');

// loads all env variables
dotEnvLoad();

// creates a config with all env variable's value
const withEnv = nextEnv();
module.exports = withEnv();
