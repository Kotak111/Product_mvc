const Category = require("../model/CategoryModel");

exports.create = async (req,res)=>{
    try {
        const {Cate_name}=req.body;
        console.log(req.body);
        const data= await Category.create({
            
            Cate_name
        })
        if(data){
            res.status(200).json({
                success:true,
                message:"category added😍"
            })
        }
        else{
            res.status(400).json({
                success:true,
                message:"category  not added😫"
            })
        }
    } catch (error) {
        
    }
}
exports.index = async(req,res)=>{
    try {
        const data=await Category.find()
        if(data){
            res.json({data})
        }
        else{
            res.json("no data found")
        }
    } catch (error) {
        
    }
}
exports.trash =async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await Category.findByIdAndDelete(id)
        if(data){
            res.json("data are deleted🤞")
        }
        else{
            res.json("no id found🤣🤣")
        }
    } catch (error) {
        
    }
}
exports.update=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await Category.findByIdAndUpdate(id,
            {
                Cate_name:req.body.Cate_name
            }
        )
        if(data){
            res.json("data are updated😍")
        }
        else{
            res.json("id no found😫😫")
        }
    } catch (error) {
        console.log(error);
    }
}