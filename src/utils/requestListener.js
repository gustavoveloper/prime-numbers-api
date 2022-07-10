const logger = require('./logger');

const routeHandler = require('./routeHandler');


async function requestListener(request, response) {
    response.json = body => {
        const data = JSON.stringify(body);
        return response.end(data)
    };

    response.status = function(code) {
        this.statusCode = Number.parseInt(code);
        return this
    };

    logger(request, response);


    return await routeHandler(request, response)
};


module.exports = requestListener