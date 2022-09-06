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
 *     description: Create Grid
 *     tags:
 *       - Grid
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get a koa2 string
 */
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
