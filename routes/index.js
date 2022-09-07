const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

/**
 * @swagger
 * /string:
 *   get:
 *     description: Try get string
 *     tags:
 *       - Index
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get a string
 */
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

/**
 * @swagger
 * /json:
 *   get:
 *     description: Try get a json string
 *     tags:
 *       - Index
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get a json string
 */
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
