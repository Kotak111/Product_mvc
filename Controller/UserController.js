const User = require("../model/UserModel");
// const hashedPassword =require("../helpers/hashPassword");
const hashPassword = require("../helpers/hashPassword");

exports.create = async  (req,res)=>{
    try {
        const {User_name,User_email,User_mobile,User_address,Pro_id,user_password}=req.body;
        const user_profile=req?.file?.filename;
        const hashedPassword = await hashPassword(user_password);
        const data=await User.create({
            User_name,
            User_email,
            User_mobile,
            User_address,
            Pro_id,
            user_password:hashedPassword,
            user_profile,
            
        })
        if(data){
            res.status(200).json({
                success:true,
                message:"User Data Are Added👍"
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:"Something Went Wrong🤦‍♂️"
            })  
        }
    } catch (error) {
        console.log(error);
    }
}
exports.find = async(req,res)=>{
    try {
        const data=await User.find();
        if(data){
            res.json({data})
        }
        else{
            res.json("no data found😫😫")
        }
    } catch (error) {
        console.log(error);
    }
}
exports.trash=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await User.findByIdAndDelete(id)
        if(data){
            res.json("data are deleted😍")
        }
        else{
            res.json("id not found😫😫😫")
        }
    } catch (error) {
        
    }
}
exports.update=async (req,res)=>{
  try {
      const id=req.params.id
      const data=await User.findByIdAndUpdate(id,
          {
              User_name:req.body.User_name,
              User_email:req.body.User_email,
              User_mobile:req.body.User_mobile,
              User_address:req.body.User_address
          }
      )
      if(data){
          res.json("User are updated😍")
      }
      else{
          res.json("no id found ! please check id")
      }
  } catch (error) {
    
  }
}