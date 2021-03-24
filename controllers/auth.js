const jwt = require('jsonwebtoken')

const createToken = (id) =>{
    const token = jwt.sign({id}, process.env.secret, {
        expiresIn: 300
    })

    return token;
}


module.exports = createToken