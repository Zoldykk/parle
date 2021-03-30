const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User');
const handleErrors = require('./errorHandler');
const genToken = require('./genToken');

exports.homeGet = (req, res) =>{
    
}

exports.loginPost = async (req, res) =>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    try{
        if(user){
            const comparePasswords = await bcrypt.compare(password, user.password);
            if(comparePasswords){
                const token = genToken(user._id)
                res.cookie('jwt', token)
                res.json({user: user._id})
            }else{
                throw new Error('incorrect password')
            }
        }else{
            throw new Error('incorrect username')
        }
    } 
    
    catch(err){
        const errors = handleErrors(err);
        res.status(400).send(errors)
    }
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
        const token = genToken(newUser._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: 300000 })
        res.json({user: newUser._id})
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).send({errors})
    }
}

exports.logoutGet = async (req, res) =>{
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/')
}

exports.getCurrentUser = async (req, res) =>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, process.env.secret, async (err, authorizedData) =>{
            if(err){
                console.log(err)
            }
            const currentUser = await User.findById(authorizedData.id)
            res.json(currentUser)
        })
    }else{
        res.send('auth error')
    }
}
