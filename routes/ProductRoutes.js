const router=require("express").Router();
const ProductController=require("../Controller/ProductController");
const upload = require("../utils/ProductImage");

router.post("/",upload.single("product_image"),ProductController.create)
router.get("/",ProductController.index)
router.delete("/:id",ProductController.trash)
router.put("/:id",upload.single("product_image"),ProductController.update)

module.exports=router;