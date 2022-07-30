const cloudinary = require('cloudinary').v2
const asyncHandler = require('express-async-handler')

const addNewProduct = asyncHandler(async(req,res)=>{
    const {file}=req.body
    
    //IN PROGRESS
    
    // cloudinary.v2.uploader.upload(file, {upload_preset: "my_preset"}, (error, result)=>{
    //     console.log(result, error);
    // });

    console.log("New product request")

    res.json(req.body)

})

module.exports={
    addNewProduct
}