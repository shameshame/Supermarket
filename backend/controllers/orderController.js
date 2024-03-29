const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const Order = require('../models/orderModel')
const OrderItem = require('../models/itemModel')


const createOrder=asyncHandler(async(req,res)=>{
   
   //Since we save cart items BEFORE insertion of order, we need to generate orderId here
   //(we pass it to loadCartItems and then use for creation of the order)
   const orderId=new mongoose.Types.ObjectId();
   const {cart,totalPrice,totalItems}=req.body
   
   const session = await Order.startSession();
   
   try{
      await session.withTransaction(async()=>{
        Order.verifyData(cart,totalItems,totalPrice)
        await Order.enoughItemsInStock(cart,session)
        await Order.loadCartItems(cart,orderId,session)
        await Order.create([{owner : req.user._id,_id:orderId,totalPrice,status:"Completed"}],{session})
        res.status(201).json({message:"Order has been sent successfully",id:orderId}) 
      })
   }catch (error) {
     res.status(500).json({message: error.message})
   }finally{
     session.endSession()
   }
})



const getMyOrders=asyncHandler(async(req,res)=>{
    match={}
    // match.status=req.query.status

    await req.user.populate({path: "orders",
        populate:{
            path: 'products',
            model: OrderItem,
            select:"description quantity price orderId"
        },
        match,
        options:{
            limit:parseInt(req.query.limit),
            sort:{createdAt:"desc"}
        }
    })
    res.status(200).json(req.user.orders)
})

module.exports={
    createOrder, getMyOrders
}

