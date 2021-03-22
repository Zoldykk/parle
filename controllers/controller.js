const User = require('../models/User');

exports.loginGet = async (req, res) =>{
    res.send('login route')
}

exports.registerGet = async (req, res) =>{
    res.send('register route')
}

