const Product = require("../model/ProductModel");
const fs = require("fs")
const path = require("path");
// const { json } = require("stream/consumers");

exports.create = async (req, res) => {
    try {
        const { cat_id, product_name, product_dec, product_price } = req.body;
        const product_image = req?.file?.filename;

        const data = await Product.create({
            cat_id,
            product_name,
            product_dec,
            product_price,
            product_image
        })
        if (data) {
            res.status(200).json({
                success: true,
                message: "product inserted"
            })
        }
        else {
            res.status(400).json({
                success: true,
                message: "product not inserted"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
exports.index = async (req, res) => {
    try {
        const data = await Product.find()
        if (data) {
            res.json({ data })
        }
        else {
            res.json("no data found")
        }
    } catch (error) {

    }
}
exports.trash = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        const image = data?.product_image;
        if (data) {
            fs.unlink(path.join(__dirname, `../uploads/${image}`), (err) => {
                if (err) {
                    res.json("image not found")
                }
            })
            res.json("data are deleted")
        }
        else {
            res.json("no data found")
        }
    } catch (error) {

    }
}
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findByIdAndUpdate(
            id,
            {
                product_name: req.body.product_name,
                product_dec: req.body.product_dec,
                product_price: req.body.product_price,
                product_image: req?.file?.filename
            }
        )
        if (data) {
            res.status(200).json({
                success: true,
                message: "data are updated😍"
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "data are not updated😫😫😫"
            })
        }
    } catch (error) {
        console.log(error);
    }
}