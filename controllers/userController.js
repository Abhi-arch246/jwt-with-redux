const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')



const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    console.log(req.body);

    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({ msg: "User already exists" })
    } else {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = await User.create({
                username,
                email,
                password: hashedPassword
            })

            if (user) {
                res.status(200).json({
                    _id: user.id,
                    username: user.username,
                    email: user.email,
                    token: generateToken(user._id)
                })
            } else {
                res.status(400).json({ msg: "Something went wrong" })
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "User not registered" })
        }
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({ msg: "not logged in" })
    }
}

const meRoute = async (req, res) => {
    const { _id, username, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username,
        email
    })

}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, { expiresIn: '30d' })
}



module.exports = {
    registerUser,
    loginUser,
    meRoute
}