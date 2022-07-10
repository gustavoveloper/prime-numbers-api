const { dataFilePath } = require('../config');

const { readFileSync } = require('fs');


async function getPrimeNumbers() {
    const primes = readFileSync(dataFilePath).toString();

    return JSON.parse(primes)
};


module.exports = getPrimeNumbers