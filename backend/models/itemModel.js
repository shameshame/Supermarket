const mongoose = require('mongoose')


const itemSchema = mongoose.Schema({
    
    //A number of items, a client is going to purchase
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    
    //Price for a single item (identical to that in Product)
    price: {
        type: Number,
        required: true
    },

    description:{
        type:String,
        required: true
    },


    orderId:{
        type:ObjectId, 
        required:true,
        ref: "Order"
    }
})

module.exports = mongoose.model('OrderItem', itemSchema)