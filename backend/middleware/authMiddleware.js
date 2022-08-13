const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const tokenNotSuppliedHandler = (token)=>{
      if(!token) throw Error("You are not authorized")
}

const protect = asyncHandler(async (req, res, next) => {
  //Get token from cookies
  let token=req.cookies.access_token;
    
      try {
           tokenNotSuppliedHandler(token)
           
           // Verify token
           const decoded = jwt.verify(token, process.env.JWT_SECRET)

           // Get user from the token
           req.user = await User.findById(decoded.id).select('-password')

           next()
    } catch (error) {
      console.log(error.message)
      res.status(401)
      throw new Error('Not authorized')
    }
  

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }