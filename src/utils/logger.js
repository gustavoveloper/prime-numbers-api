async function logger(request, response) {
    response.on('finish', () => {
        const { statusCode } = response;

        const host = request.socket.remoteAddress;
        const port = request.socket.remotePort;

        const { method, url } = request;


        console.log(`${host}:${port} -> ${method} "${url}" -- ${statusCode}`)
    })
};


module.exports = logger