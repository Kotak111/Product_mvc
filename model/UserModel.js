const { Schema, default: mongoose, model } = require("mongoose")

const Format={
    type:String,
    trim:true,
    required:true
}

const UserModel= new Schema({
    User_name:{
        ...Format
    },
    User_email:{
        ...Format,
        unique:true["email id alredy exist"],

    },
    User_mobile:{
        type:Number,
        trim:true,
        required:true
    },
    User_address:{
        ...Format
    },
    user_profile:{
            type:String,
            required:true
    },
    user_password:{
            type:String,
            required:true
    },
    
    role_id:{
        type:String,
        default:"user",
        enum:["user","admin","superadmin"]
    }
   

},{
    timestamps:true
})
const User=model("UserData",UserModel)
module.exports=User