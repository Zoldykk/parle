const User = require('../models/User');
const bcrypt = require('bcrypt')
exports.loginGet = async (req, res) =>{
    res.send('login route')
}

exports.registerGet = async (req, res) =>{
    res.send('register route')
}

exports.registerPost = async (req, res) =>{
    const {username, email, password, passwordVerify, } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = await new User({
        username: username,
        email: email,
        password: hashedPassword,
        passwordVerify: hashedPassword
    });
    // await newUser.save();
    res.send(newUser)
}

