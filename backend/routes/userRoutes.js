const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  logOut
} = require('../controllers/userController')
const { authorization } = require('../middleware/authMiddleware')

router.post('/signup', registerUser)
router.post('/login', loginUser)
router.get('/logout', authorization,logOut)
router.get('/me', authorization, getMe)






module.exports = router