let jwt = require('jsonwebtoken')

let verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
        return ''
    }
}

module.exports = verifyToken