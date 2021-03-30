const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')
const checkToken = require('../controllers/checkToken');

router.post('/', controller.loginPost)
router.get('/getUser', controller.getCurrentUser)
router.get('/home', checkToken, controller.homeGet)
router.post('/home', checkToken, controller.homePost)
router.get('/logout', controller.logoutGet)
router.post('/register', controller.registerPost)

module.exports = router

