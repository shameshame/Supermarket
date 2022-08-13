const mongoose = require('mongoose')
const { ObjectId } = require("mongodb")
const Product = require('../models/productModel')
const OrderItem = require('../models/itemModel')
const validator = require('validator');




const orderSchema = mongoose.Schema({
    owner:{
        type:ObjectId, //mongoose.Schema.Type.ObjectID
        required:true,
        ref: "User"
    },

    totalPrice: {
        required:true,
        type: Number
    },

    status:{type:String,enum:["pending","closed"]},
},{
    timestamps: true
})

orderSchema.virtual("products",{
    ref: "OrderItem",
    localField:"_id",
    foreignField: "orderId"
})

orderSchema.statics.allItemsInStock=function(cart){
    if(!cart.every(item=>Product.enoughItemsInStock(item)))
       throw Error("Order failed- the available  quantity is insufficient to fulfill your request")
}

 
orderSchema.statics.loadCartItems=async function(cart,orderId){
    
    await Promise.all(cart.map(async (item) => {
        await OrderItem.create(...item,orderId)
    }));
}



module.exports = mongoose.model('Order', orderSchema)