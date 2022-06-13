const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')



const registerUser = async (req, res) => {
    const { username, email, password } = req.body

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
                const data = {
                    _id: user._id,
                    email: user.email,
                    username: user.username

                }

                res.status(200).json({
                    msg: "User cred successful",
                    token: generateToken(data)
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
        const data = {
            _id: user._id,
            email: user.email,
            username: user.username

        }

        res.status(200).json({
            msg: "User cred successful",
            token: generateToken(data)
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

const generateToken = (data) => {
    return jwt.sign({ data }, process.env.SECRET_TOKEN, { expiresIn: '30d' })
}



module.exports = {
    registerUser,
    loginUser,
    meRoute
}