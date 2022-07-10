const { server: serverConfig } = require('./config');

const server = require('./server');


server.listen(serverConfig.port, serverConfig.host, () => {
    console.clear();
    console.log(`PrimeNumbersAPI server listening at tcp://${serverConfig.host}:${serverConfig.port}...` + '\n\n')
})