const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Order = require( './orderModel')


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the name"]
    },
    
    email:{
        type:String,
        required:[true,"Please enter the email"],
        unique:true,
        trim:true,
        lowercase:true
    },

    password:{
        type:String,
        required:[true,"Please enter the password"] 
    },

    role:{type:String,
          enum: ['Admin', 'Customer','Storekeeper'],
          default:"Customer"
    },
    lastLogin: {
        type: String,
        default: Date().toString()
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

userSchema.statics.findByCredentials = async (email,password)=>{
    const foundUser = await User.findOne({email});
    
    if(!(foundUser && await bcrypt.compare(password,foundUser.password )))
        throw new Error("Invalid credentials");

    return foundUser ;
}

userSchema.statics.formatDate= (date)=>{
    let day = date.getDate()<10 ? `0${date.getDate()}`:date.getDate()
    let year = date.getFullYear();
    let month=date.getMonth() + 1;
    let hours= date.getHours();
    let minutes=date.getMinutes();

    
    return `${day}-${month}-${year},${hours}:${minutes}`;
}

userSchema.virtual("orders",{
    ref: "Order",
    localField:"_id",
    foreignField: "owner"
})

//Add middleware for password changing




//Middleware for cascade deletion (delete all user's orders before deletion of the user himself)
userSchema.pre("remove",async function(next){
    const user =this;
    await Order.deleteMany({owner: user._id})

    next();
})


module.exports = mongoose.model('User', userSchema)