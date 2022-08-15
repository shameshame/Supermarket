const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  logOut
} = require('../controllers/userController')
const { authorization } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/logout', authorization,logOut)
router.get('/me', authorization, getMe)
router.trace("/stam",()=>{
  console.log("А где бибушка малыш")
})





module.exports = router