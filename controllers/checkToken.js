const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) =>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, process.env.secret, (err, authorizedData) =>{
            if(err){
                res.redirect('/')
            }else{
                next()
            }
        })
    }else{
        res.redirect('/')
    }
}


module.exports = checkToken