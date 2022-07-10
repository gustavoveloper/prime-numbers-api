const { matchRegexp, getErrorHttpResponseBody } = require('../helpers');


async function routeHandler(request, response) {
    const { method, url } = request;

    if (method !== 'GET') {
        // 405 Error - Method Not Allowed
        return response.status(405).json(getErrorHttpResponseBody(`The "${method}" HTTP method is not supported by this endpoint`))
    };


    if (matchRegexp(/^\/(api\/?)?$/i, url)) {}

    else if (matchRegexp(/^\/docs$/i, url)) {}

    else {}
};


module.exports = routeHandler