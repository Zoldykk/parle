const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: [true, 'email already exists'],
        validate: [(value) =>{ 
            return /^[^@]+@\w+(\.\w+)+\w$/.test(value)
         }, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength: [6, 'Password must be at least 6 characters']
    }
}, { timestamps: { createdAt: 'created_at' } });


userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.plugin(uniqueValidator, { message: '{PATH} must to be unique.' });

const user = mongoose.model('user', userSchema);

module.exports = user;