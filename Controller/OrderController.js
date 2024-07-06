const Order = require("../model/OrderModel")

exports.create = async (req,res)=>{
    try {
        const {User_id,pro_id}=req.body;
        const data=await Order.create({
                User_id,
                pro_id
        })
        if(data){
            res.json({
                message:"Order are Inserted👍👍"
            })
        }
        else{
            res.json("no data found😫😫")
        }
    } catch (error) {
        
    }
}
exports.find = async (req,res)=>{
    try {
        const data= await Order.find().populate("User_id").populate({
            path:'pro_id',
            select:"-__v -createdAt -updatedAt",
            populate:{
                path:'cat_id',
                select:"-__v -createdAt -updatedAt"
            }
        }).exec()
        if(data){
            res.json({data})
        }
        else{
            res.json({
                message:"no data found😫😫"
            })
        }
    } catch (error) {
        
    }
}
exports.trash =async (req,res)=>{
    const id=req.params.id;
    const data =await Order.findByIdAndDelete(id)
    if(data){
        res.json({
            success:true,
            message:"data deleted👍👍❤️"
        })
    }
    else{
        res.json({
            success:false,
            message:"invalid id....😫😫"
        })
    }
}