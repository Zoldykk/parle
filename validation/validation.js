const handleError = (err) =>{
    let errors = {
        username: '',
        email: '',
        password: ''
    }

    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(error => {
            errors[error.properties.path] = error.message
        })
    }

    return errors
}

module.exports = handleError