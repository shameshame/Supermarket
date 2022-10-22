const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  logOut,
  deleteAccount,
  fetchUsersByQuery
} = require('../controllers/userController')
const { authorization } = require('../middleware/authMiddleware')

router.get("/",fetchUsersByQuery)
router.post('/signup', registerUser)
router.post('/login', loginUser)
router.get('/logout', authorization,logOut)
router.get('/me', authorization, getMe)
router.delete('/:id',authorization,deleteAccount)
 





module.exports = router