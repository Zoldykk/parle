const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/', controller.loginPost)
router.post('/register', controller.registerPost)

module.exports = router
