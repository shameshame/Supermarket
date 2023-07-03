const express = require("express")
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();
const cookieParser = require("cookie-parser")
const colors=require("colors")
const path = require('path')
const cors=require("cors")
const PORT=process.env.NODE_ENV==="development" ?5000:3000
const {requestMethod} = require("./middleware/requestMethod")
const buildPath = "../frontend/build"


const app=express()

app.all('*',requestMethod)
app.use(express.json({limit: '200kb'}))
app.use(express.urlencoded({extended:false,limit: '200kb'}))
app.use(cors({origin:true,credentials: true}))
app.use(cookieParser())






app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/inventory', require('./routes/productRoutes'))

//Code block to serve frontend from server
app.use(express.static(path.join(__dirname, buildPath)));
app.get("*", (_, res)=> {
  res.sendFile(
    path.join(__dirname, `${buildPath}/index.html`),
    (error)=> {
      res.status(500).send(error);
    }
  );
});




connectDB().then(()=> {
    app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

})


