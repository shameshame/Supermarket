const mongoose = require('mongoose')
const { ObjectId } = require("mongodb")
const Product = require('../models/productModel')
const OrderItem = require('../models/itemModel')



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
    timestamps: true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

orderSchema.virtual("products",{
    
    ref: "OrderItem",
    localField:"_id",
    foreignField: "orderId"
})

orderSchema.statics.enoughItemsInStock=async function(cart,session){
    let promiseResult= {isFulfilled:false,isRejected:false}
    let {isFulfilled,isRejected}=promiseResult
    await Promise.all(cart?.map(async(item)=>await Order.attemptToUpdateStore(item,session)))
          .then(()=>isFulfilled=true,()=>isRejected=true)
    
    if(isRejected)
       throw Error("Order failed- the available  quantity is insufficient to fulfill your request")
}

orderSchema.statics.verifyData=function(cart,totalItemsFromClient,totalPriceFromClient){
    const initialValue=0;
    let itemsInTotal=cart.reduce((accumulator,current)=>accumulator+current.quantity,
    initialValue)

    let totalPrice = cart.reduce((accumulator,current)=>accumulator+current.quantity*current.price,
    initialValue)

    if(totalPrice!==totalPriceFromClient || itemsInTotal!==totalItemsFromClient)
       throw new Error('Cart data are not intact')
}

orderSchema.statics.attemptToUpdateStore = async function(item,session){
    let productToUpdate = await Product.findOne({_id:item._id})
    productToUpdate.quantity-=item.quantity;
    await productToUpdate.save({session})
}

orderSchema.statics.loadCartItems=async function(cart,orderId,session){
    
    await Promise.all(cart.map(async (item) => {
        const {quantity,price,description}=item
        await OrderItem.create([{quantity,price,description,orderId}],{session})
    }));
}

orderSchema.pre("remove",async function(next){
    const order =this;
    await OrderItem.deleteMany({orderId: order._id})
    next();
})


const Order = mongoose.model("Order",orderSchema)
module.exports = Order