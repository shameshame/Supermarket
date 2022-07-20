const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Order = require('../models/orderModel')



// Error Handlers

function userExistsHandler(res,user){
   if(user){
    res.status(400)
    throw new Error('User already exists')
   }
    
}

function missingFieldHandler(res,name,email,password){
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }
}

async function hashedPassword(password){
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

async function invalidLoginHandler(res,user,password){
    if(!user || !(await bcrypt.compare(password, user.password))){
        res.status(400)
        throw new Error('Invalid credentials')
    }
}

function invalidInputHandler(res,user){
    if(!user){
        res.status(400)
        throw new Error('Invalid user data')
    }
}

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  
  missingFieldHandler(res,name,email,password)
  userExistsHandler(res,await User.findOne({ email }))
  const user = await User.create({name,email,password: await hashedPassword(password) })
  invalidInputHandler(res,user)
  
  res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
  })
   
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    await invalidLoginHandler(res,user,password)

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
   
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})



const getMyOrders=asyncHandler(async)

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3h',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}