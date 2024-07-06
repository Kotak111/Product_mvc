const router=require("express").Router();
const OrderController=require("../Controller/OrderController")



router.post("/",OrderController.create)
router.get("/",OrderController.find)
router.delete("/:id",OrderController.trash)




module.exports=router;