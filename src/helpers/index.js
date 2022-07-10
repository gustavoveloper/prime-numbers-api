module.exports = {
    matchRegexp: (regexp, text) => regexp.test(text),

    getErrorHttpResponseBody: error => ({
        error,
        data: null
    })
}