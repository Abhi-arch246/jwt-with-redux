const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.SECRET_TOKEN)
            req.body.user = decode
            next()
        } catch (error) {
            console.log(error);
            res.status(401).json({ msg: "Something went wrong" })
        }
    }

    if (!token) {
        res.status(401).json({ msg: "Not authorised" })

    }
}
