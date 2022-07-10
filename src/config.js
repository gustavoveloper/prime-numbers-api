require('dotenv').config();


module.exports = {
    server: {
        host: process.env.HOST || 'localhost',
        port: Number.parseInt(process.env.PORT) || 8080
    },
    dataFilePath: process.env.DATA_FILE_PATH
}