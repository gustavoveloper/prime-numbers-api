const { createServer } = require('http');

const requestListener = require('./utils/requestListener');


const server = createServer(requestListener);


module.exports = server