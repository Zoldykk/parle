const bcrypt = require('bcrypt')
const User = require('../models/User');
const handleErrors = require('../validation/validation');


exports.loginPost = async (req, res) =>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    try{
        if(user){
            const comparePasswords = await bcrypt.compare(password, user.password);
            if(comparePasswords){
                res.send(user._id)
            }else{
                throw new Error('incorrect password')
            }
        }
        throw new Error('incorrect username')
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
        res.send(newUser)
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).send({errors})
    }
}

