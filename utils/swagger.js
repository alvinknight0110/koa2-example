const router = require('koa-router')(); // 引入路由函數
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
    // openapi: "3.0.0",
    info: {
        title: 'Hello Koa2 Swagger',
        version: '1.0.0',
        description: 'trying swagger API',
    },
    host: 'localhost:3000',
    basePath: '/', // Base path (optional)
    servers: [
        {
            "url": "https://cq9.dev.wink.org",
            "description": "test server"
        },
        {
            "url": "http://localhost:18078",
            "description": "Local server(only for local testing)"
        }
    ],
};
const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '../routes/*.js')], // 寫有註解的router的存放地址, 最好path.join()
};

const swaggerSpec = swaggerJSDoc(options);
// 通過路由獲取生成的註解文件
router.get('/swagger.json', async function (ctx) {
    ctx.set('Content-Type', 'application/json');
    ctx.body = swaggerSpec;
});

module.exports = router