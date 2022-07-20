const express = require("express")
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();
const colors=require("colors")
const PORT=process.env.PORT || 5000

connectDB()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})




