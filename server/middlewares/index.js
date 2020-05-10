const { getUserData } = require('../helpers/token')

function authentication (req, res, next) {
    const { access_token } = req.headers
    console.log(req.headers)

    if(!access_token) {
        throw { messages: ['Please sign in first'], statusCode: 403 }
    }

    try {
        req.userData = getUserData(access_token)
        
        next()
    } catch (err) {
        
        throw { messages: ['Please sign in first'], statusCode: 403 }
    }
    
}

function errorHandler (err, req, res, next) {
    console.log(err)
    let statusCode = 500
    let messages = []

    if (err.name === 'SequelizeValidationError') {
        console.log(err)
        statusCode = 400

        for (let i = 0; i < err.errors.length; i++) {
            messages.push(err.errors[i].message)
        }
    } else if (err.messages) {
        statusCode = err.statusCode

        for(let i = 0; i < err.messages.length; i++) {
            messages.push(err.messages[i])
        }
    }
    else {
        messages.push('Internal sever error')
    }
    res.status(statusCode).json({ messages })
}

module.exports = {
    authentication,
    errorHandler
}