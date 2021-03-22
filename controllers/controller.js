const User = require('../models/User');
const handleErrors = require('../validation/validation');

exports.loginGet = async (req, res) =>{
    res.send('login route')
}

exports.registerGet = async (req, res) =>{
    res.send('register route')
}

exports.registerPost = async (req, res) =>{
    const {username, email, password } = req.body
    try{
        const newUser = await new User({
            username: username,
            email: email,
            password: password,
        });
        await newUser.save();
        res.send(newUser)
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).send({errors})
    }
}

