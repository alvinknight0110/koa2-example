const router = require('koa-router')();
const controller = require('../controller/data');

router.prefix('/data')

/**
 * @swagger
 * /data:
 *   get:
 *     description: Try swagger transaction data.
 *     tags:
 *       - Data
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get swagger transaction data.
 */
router.get('/', controller.getData);

module.exports = router;