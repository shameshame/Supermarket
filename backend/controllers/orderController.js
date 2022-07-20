const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

const Order = require('../models/orderModel')


const createOrder=asyncHandler(async(req,res)=>{
   

   //Since we save cart items BEFORE insertion of order, we need to generate orderId here
   //(we pass it to loadCartItems and then use for creation of the order)
   //(CHECK IF WE REALLY NEED TO DO IT THIS WAY !!!!)
   const orderId=new mongoose.Types.ObjectId();
   await Order.allItemsInStock(req.cart)
   await Order.loadCartItems(req.cart,orderId)
   
   const order=await Order.create({owner : req.user._id, _id:orderId}).
   order? res.status(201).json({message:"Order has been sent successfully"})
         :res.status(400).json({error:"Bad request - order sending failed"})
})



const getMyOrders=asyncHandler(async(req,res)=>{
    match={}
    match.status=req.query.status
    
    await req.user.populate({path: "orders",
        match,
        options:{
            limit:parseInt(req.query.limit),
            sort:{createdAt:"desc"}
        }
    })

    await Order.find({owner:req.user._id}).populate({path:"products",select:"description quantity price"})
    return req.user.orders
})

module.exports={
    createOrder, getMyOrders
}

