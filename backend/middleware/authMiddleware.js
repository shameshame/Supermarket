const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const tokenNotSuppliedHandler = (token)=>{
      if(!token) throw new Error("No token supplied")
}

const authorization = asyncHandler(async (req, res, next) => {
  //Get token from cookies
  let token=req.cookies.access_token;
    
      try {
           tokenNotSuppliedHandler(token)
           const decoded = jwt.verify(token, process.env.JWT_SECRET)
           req.user = await User.findById(decoded.id).select('-password')
           next()
    } catch (error) {
        res.status(401).json({message: error.message})
    }
  })

module.exports = { authorization }