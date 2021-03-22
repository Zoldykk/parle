const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/login', controller.loginGet)
router.get('/register', controller.registerGet)
router.post('/register', controller.registerPost)

module.exports = router
