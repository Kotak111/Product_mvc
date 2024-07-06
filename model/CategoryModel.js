const { Schema, model, default: mongoose } = require("mongoose");

const Format={
    type:String,
    trim:true,
    reduired:true
}
const CategoryModel = new Schema({
    
    Cate_name:{
        ...Format
    },

},{timestamps:true})
const Category=model("Category",CategoryModel)
module.exports=Category
