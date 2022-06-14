const express = require('express')
const router = express.Router()
const { registerUser, loginUser, meRoute } = require('../controllers/userController')
const userMiddleware = require('../middleware/userMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', userMiddleware, meRoute)

module.exports = router