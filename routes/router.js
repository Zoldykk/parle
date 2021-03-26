const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')
const checkToken = require('../controllers/checkToken');


router.post('/', controller.loginPost)
router.get('/home', checkToken, controller.homeGet)
router.get('/logout', controller.logoutGet)
router.post('/register', controller.registerPost)

module.exports = router

