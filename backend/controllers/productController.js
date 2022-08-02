const cloudinary = require('cloudinary')
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const addNewProduct = asyncHandler(async(req,res)=>{
    const {file,filename,brand,description,category,quantity,price}=req.body
    
    
    const response  = await  cloudinary.v2.uploader.upload(file, {
        public_id:filename,
        overwrite:false
    });

    let created= await Product.create({description,brand,category,price,quantity,
                                       image:response.secure_url})
    created ? res.status(201).send() : res.status(400).send(error)
})



const fetchProductsByQuery = asyncHandler(async (req, res)=>{
   const {limit,sortBy,...rest}=req.query
   const sort={}
   
   if(sortBy){
     const parts = req.query.sortBy.split(':')
     sort[parts[0]] = parts[1].toLowerCase()==="desc"?-1:1
   }
   
   let productsSubset= await Product.find(rest,null,{sort,limit})
   res.json(productsSubset)
})

module.exports={
    addNewProduct, fetchProductsByQuery
}