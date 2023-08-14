const {sign, verify} = require('jsonwebtoken')
require('dotenv').config()

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiredIn: '1h'
    }
    )
}

// function verifyAToken(req,res,next){
//     const token = req.headers["authorization"].
// }

module.exports = {
    createToken
}