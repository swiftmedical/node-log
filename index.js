
var pino = require('pino');

let level = process.env.LOG_LEVEL || 'info';

module.exports = pino({ level: level });