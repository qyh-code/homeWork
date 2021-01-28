const router = require('koa-router')()
const controller = require('../controllers/user')

router.prefix('/user')

router.post('/login', controller.login);

router.post("/regist", controller.regist);

router.get('/checkUser', controller.checkUser);

module.exports = router