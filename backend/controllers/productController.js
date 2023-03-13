const cloudinary = require('cloudinary')
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const addNewProduct = asyncHandler(async(req,res)=>{
    const {file,filename,...rest}=req.body
    const response  = await  cloudinary.v2.uploader.upload(file, {
        public_id:filename,
        overwrite:false,
    });

    let created= await Product.create({...rest,image:response.secure_url})
    created ? res.status(201).send() : res.status(400).send(error)
})



const fetchProductsByQuery = asyncHandler(async (req, res)=>{
   const {limit,sortBy,...rest}=req.query
   const sort={}
   
   if(sortBy){
      const parts = req.query.sortBy.split('_')
      sort[parts[0]] = parts[1].toLowerCase()==="desc"?-1:1
   }
   
   let productsSubset= await Product.find(rest,null,{sort,limit})
   res.json(productsSubset)
})

const fetchProductsByUserInput = async(req,res)=>{
   
    const {input}=req.query
    Product.find({description:new RegExp(input,'i')}).exec((error,result)=>{
    error ? res.status(400).json({message: error.message})
          : (result ? res.status(200).json(result) 
                    :res.status(200).json({message:"No matches for your request"}))
    });
}

const deleteProduct= async (req, res)=>{
    await Product.findByIdAndDelete(req.params.id,(error,doc)=>{
       error ? res.status(400).json({message: error.message})
             : (doc ? res.status(200).json(doc) 
                    :res.status(400).json({message:"Invalid product id"}))
     })
 }

module.exports={
    addNewProduct, fetchProductsByQuery,deleteProduct,
    fetchProductsByUserInput
}