const { selectQuery } = require('../utils/mysql.js');

const getData = async function (ctx, next) {
    const data = await selectQuery('select * from swagger_transaction_log', null);
    ctx.body = data;
};

module.exports = {
    getData
};