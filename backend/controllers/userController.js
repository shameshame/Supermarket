const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const accessTokenOptions = {
                        maxAge: 2 * 60 * 60 * 1000,
                        secure: process.env.NODE_ENV !== "development", 
                        httpOnly: true
}

// Error Handlers (it's better to have them all as statics in user model)

function userExistsHandler(user){
   if(user){
     throw new Error('User already exists')
   }
    
}

function missingFieldHandler(name,email,password){
    if (!name || !email || !password) {
       throw new Error('Please fill all the fields')
    }
}

async function hashedPassword(password){
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

async function invalidLoginHandler(user,password){
    if(!user || !(await bcrypt.compare(password, user.password))){
       throw new Error('Invalid credentials')
    }
}

function invalidInputHandler(user){
    if(!user){
       throw new Error('Invalid user data')
    }
}

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  
    try{
      missingFieldHandler(name,email,password)
      userExistsHandler(await User.findOne({ email }))
      const user = await User.create({name,email,password: await hashedPassword(password) })
      invalidInputHandler(user)
  
      res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
      })
    }catch(error){
      res.status(400).json({message:error.message})
    }
   
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
       try{
           const user = await User.findOne({ email })
           await invalidLoginHandler(user,password)
           user.lastLogin = User.formatDate(new Date())
           await user.save()
           res.cookie("logged_in",true,{...accessTokenOptions,httpOnly:false})
           res.cookie('access_token',generateToken(user._id),accessTokenOptions)
              .status(200).json({role:user.role})
       }catch(error){
           res.status(401).json({message: error.message})
       }
  })
  
  const fetchUsersByQuery = asyncHandler(async (req, res)=>{
    const {limit,sortBy,...rest}=req.query
    const sort={}
    
    if(sortBy){
       const parts = req.query.sortBy.split('_')
       sort[parts[0]] = parts[1].toLowerCase()==="desc"?-1:1
    }
    
    let userSubset= await User.find(rest,null,{sort,limit}).select('-password')
    res.json(userSubset)
 })


// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const updateAccount = asyncHandler(async (req, res)=>{
     try{
        const {_id,...fieldsToUpdate}=req.body
        let userToUpdate = await User.findById(_id)
        const fieldArray= Object.keys(fieldsToUpdate)
        fieldArray.forEach(field=>userToUpdate[field]=fieldsToUpdate[field])
        userToUpdate.save()
        res.status(200).json({message: "Updated successfully"})
      }catch (error) {
        res.status(400).json({message: error.message})
      }
})

const deleteAccount= async (req, res)=>{
   
  User.findByIdAndDelete(req.params['id'],(error,doc)=>{
      error ? res.status(400).json({message: error.message})
            : (doc ? res.status(200).json(doc) 
                   :res.status(400).json({message:"Invalid id"}))
    })
}

const logOut = (req,res)=>{
  
  res.clearCookie("logged_in")
  return res.clearCookie("access_token")
                             .status(200)
                             .json({ message: "Successfully logged out" })
                            
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
  logOut,
  fetchUsersByQuery,
  updateAccount,
  deleteAccount
}