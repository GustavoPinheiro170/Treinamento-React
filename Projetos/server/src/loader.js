// Página Principal 
const server = require('./config/server');
require('./config/db');

const routes = require('./config/routes.js')(server);