const fs = require('fs');
const loggerMiddleware = (req, res, next) => {
    let log = `${req.method} request to ${req.url} at ${new Date().toISOString()}\n`;
    fs.appendFile('storage/logs/logs.txt', log, (err) => {
        if (err) throw err;
    });
    next();
}
module.exports = loggerMiddleware;
