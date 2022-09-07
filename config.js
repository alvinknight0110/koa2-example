const package = require('./package.json');
const path = require('path');

const config = {
    app: {
        name: package.name
    },
    mysql: {
        host: 'localhost',
        port: '3306',
        db: 'tron_live',
        user: 'root',
        pwd: '123456'
    },
    fileStorage: {
        root: process.env.FS_ROOT_DIRECTORY || path.resolve('logs'),
    }
}

module.exports = config;