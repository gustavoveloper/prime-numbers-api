const {
    matchRegexp,
    getErrorHttpResponseBody,
    getSuccessfulHttpResponseBody
} = require('../helpers');

const getPrimeNumbers = require('./getPrimeNumbers');


async function routeHandler(request, response) {
    const { method, url } = request;

    if (method !== 'GET') {
        // 405 Error - Method Not Allowed
        return response.status(405).json(getErrorHttpResponseBody(`The "${method}" HTTP method is not supported by this endpoint`))
    };


    if (matchRegexp(/^\/(api\/?)?$/i, url)) {
        const primes = await getPrimeNumbers();

        return response.json(getSuccessfulHttpResponseBody(primes))
    }

    else if (matchRegexp(/^\/docs\/?$/i, url)) {
        return (
            response
            .status(301)
            .setHeader('Location', 'https://prime-numbers-api-docs.netlify.app/src/pages')
            .json(getSuccessfulHttpResponseBody('You will be redirected to https://prime-numbers-api-docs.netlify.app/src/pages.'))
        )
    }

    else {
        // 404 Error - Not Found
        return response.status(404).json(getErrorHttpResponseBody('This endpoint does not exist'))
    }
};


module.exports = routeHandler