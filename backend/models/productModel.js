const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    
    description:{
        type:String,
        required:[true,"Please add a description"],
    },

    brand:{
        type:String,
        required:[true,"Please add a company name"]
    },
    price:{
        type:Number,
        required:[true,"Product must have a price"]
    },

    image:{
        type:String
    },

    category:{
        type:String,
        required:[true,"Category is required"]
    },

    quantity:{
     type:Number,
     min:[0,"Number of items can't be negative"],
     default:1
    },

    itemsSold:{type:Number,default:0}
})

const Product = mongoose.model("Product",productSchema)

module.exports=Product
