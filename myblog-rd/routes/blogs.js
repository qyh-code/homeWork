const router = require('koa-router')()
const { verifyToken } = require('../auth');
const controller = require('../controllers/blog');

router.prefix('/blog')

router.get('/list', verifyToken, controller.getBlogList);

router.get('/detail', verifyToken, controller.getBlogById);

router.post('/addComm', controller.addComm)

router.post('/addBlog', controller.saveBlog)

module.exports = router