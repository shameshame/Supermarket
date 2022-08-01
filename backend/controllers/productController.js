const cloudinary = require('cloudinary')
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const addNewProduct = asyncHandler(async(req,res)=>{
    const {file,filename,brand,description,category,quantity,price}=req.body
    
    cloudinary.v2.uploader.upload(file, {
        public_id:filename,
        overwrite:false
    }, async (error, result)=>{
        
        let created= await Product.create({description,brand,category,price,quantity,
                              image:result.secure_url})
        created ? res.status(201).send() : res.status(400).send(error.message)
    });

})

module.exports={
    addNewProduct
}