const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const tokenNotSuppliedHandler = (res,token)=>{
      if(!token) res.status(403).json({error:"You are not authorized"})
}

const authorization = asyncHandler(async (req, res, next) => {
  //Get token from cookies
  let token=req.cookies.access_token;
    
      try {
           tokenNotSuppliedHandler(res,token)
           const decoded = jwt.verify(token, process.env.JWT_SECRET)
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

module.exports = { authorization }