const { Schema, model, default: mongoose } = require("mongoose");

const SchemaFromat = {
    type: String,
    trim: true,
    required: true
}
const ProductModel = new Schema({
    product_name: {
        ...SchemaFromat,
    },
    product_dec: {
        ...SchemaFromat
    },
    product_price: {
        type: Number,
        required: true
    },
    product_image: {
        type: String
    },
    cat_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }

}, {
    timestamps: true
})
const Product = model("Products", ProductModel)
module.exports = Product