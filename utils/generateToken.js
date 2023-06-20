let jwt = require('jsonwebtoken')

let generateToken = (data)=>{
    return jwt.sign(data,process.env.SECRET_KEY)
}

module.exports = generateToken