const { Schema, default: mongoose, model } = require("mongoose");

const OrderModel = new Schema({
    User_id:{
        type:mongoose.Types.ObjectId,
        ref:"UserData"
    },
    pro_id:{
        type:mongoose.Types.ObjectId,
        ref:"Products"
    }

},
{timestamps:true})

const Order=model("Order",OrderModel)
module.exports=Order