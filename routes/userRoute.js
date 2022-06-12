const express = require('express')
const router = express.Router()
const { registerUser, loginUser, meRoute } = require('../controllers/userController')
const { protect } = require('../middleware/userMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, meRoute)

module.exports = router