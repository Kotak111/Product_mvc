const multer = require("multer")
const path=require("path")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      if (file.fieldname === "product_image" || file.fieldname === "user_profile") {
          cb(null, 'uploads')
      }
  },
  filename: (req, file, cb) => {
      if (file.fieldname==="product_image" ||  file.fieldname === "user_profile"){
          cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
      }
  }
});
const Upload = multer({
  storage,
  limits:{
      fileSize: 1024*1024*10
  },
  fileFilter:(req,file,cb)=>{
      checkFileType(file,cb)
  }
})
function checkFileType(file, cb){
  if(file.fieldname === "product_image" || file.fieldname === "user_profile"){
      if (
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpg' ||
          file.mimetype === 'image/jpeg'||
          fiel.mimetype==='image/svg'
        ) { 
          cb(null, true);
        } else {
          cb(null, false); 
        }
  }
}

  
  const upload = multer({ storage: storage })
  module.exports=upload;