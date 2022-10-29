const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {

    // Get token
    const token = req.headers['authorization']
    
    if(!token) return res.json({
        status: "Failure",
        message: "Invalid token"
    })

    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if(err) return res.json({
            status: "Failure",
            message: "Invalid token"
        })
        console.log('\n\n\n\n\n\n\t\t\tMiddleware. token = ', token);
        req.token = token
        next()
    })
}