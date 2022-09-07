const _ = require('lodash');
const config = require("../config");
const { format, transports, createLogger } = require('winston');
const moment = require('moment');

const fs = require('fs');
if (!fs.existsSync(config.fileStorage.root)) {
    fs.mkdirSync(config.fileStorage.root);
}

const customLogger = (level = 'debug') => createLogger({
    level: level,
    format: format.combine(
        format(info => {
            if (typeof info.message === 'object') {
                info.message = JSON.stringify(info.message, null, 2);
            }
            return info;
        })(),
        format.timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSS" }),
        format.errors({ stack: true }),
        format.printf(({ service, timestamp, level, message, stack, ...data }) => {
            if (!_.isEmpty(data)) {
                message += '\n' + JSON.stringify(data, null, 2)
            }
            return `${timestamp} ${level.toUpperCase().padEnd(5, ' ')} - ${message} ${stack ? '\n' + stack : ''}`
        }),
        format.colorize({ all: true })
    ),
    defaultMeta: {
        service: config.app.name
    },
    transports: [
        new transports.Console(),
        new transports.File({
            filename: config.fileStorage.root + `/${moment().format('YYYY-MM-DD')}.log`
        })
    ]
});

module.exports = customLogger();