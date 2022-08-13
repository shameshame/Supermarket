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

    quantity:{type:Number ,default:1},

    itemsSold:{type:Number,default:0}

    
})

productSchema.statics.enoughItemsInStock = async function(frontData){
    let itemsInStock = await Product.find({description:frontData.description,brand:frontData.brand}).select("quantity")
    return  itemsInStock>=frontData.quantity
}

module.exports=mongoose.model("Product",productSchema)
