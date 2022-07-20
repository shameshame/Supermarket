const cloudinary = require('cloudinary').v2
const asyncHandler = require('express-async-handler')

const addNewProduct = asyncHandler(async(req,res)=>{
    //IN PROGRESS
    
    cloudinary.v2.uploader.upload("/home/my_image.jpg", {upload_preset: "my_preset"}, (error, result)=>{
        console.log(result, error);
    });

})