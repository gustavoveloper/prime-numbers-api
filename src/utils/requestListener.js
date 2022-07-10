const logger = require('./logger');

const routeHandler = require('./routeHandler');


async function requestListener(request, response) {
    response.json = body => {
        const data = JSON.stringify(body);
        return response.setHeader('Content-Type', 'application/json').end(data)
    };

    response.status = function(code) {
        this.statusCode = Number.parseInt(code);
        return this
    };

    response
    .setHeader('Server', 'PrimeNumbersAPI-Server')
    .setHeader('Connection', 'close');

    logger(request, response);


    return await routeHandler(request, response)
};


module.exports = requestListener