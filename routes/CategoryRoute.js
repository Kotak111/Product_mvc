const router=require("express").Router();
const CategoryController=require("../Controller/CategoryController")


router.post("/",CategoryController.create)
router.get("/",CategoryController.index)
router.delete("/:id",CategoryController.trash)
router.patch("/:id",CategoryController.update)


module.exports=router;