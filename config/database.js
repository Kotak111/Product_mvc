const { default: mongoose } = require("mongoose");

const data=mongoose.connect(`mongodb://localhost:27017/StoreData`).then(()=>{
    console.log("database connected❤️🤞");
})
.catch((err)=>{
    console.log(err);
})
module.exports=data;