const express = require("express")
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();
const cookieParser = require("cookie-parser")
const colors=require("colors")
const cors=require("cors")
const PORT=process.env.PORT || 5000
const {requestMethod} = require("./middleware/requestMethod")

connectDB()

const app=express()

app.all('*',requestMethod)
app.use(express.json({limit: '200kb'}))
app.use(express.urlencoded({extended:false,limit: '200kb'}))
app.use(cors())
app.use(cookieParser())



app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/inventory', require('./routes/productRoutes'))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})




