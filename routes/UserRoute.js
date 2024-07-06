const router=require("express").Router();
const UserController=require("../Controller/UserController")
const upload = require("../utils/ProductImage");


router.post("/",upload.single("user_profile"),UserController.create)
router.get("/",UserController.find)
router.delete("/:id",UserController.trash)
router.patch("/:id",upload.single("user_profile"),UserController.update)



module.exports=router;