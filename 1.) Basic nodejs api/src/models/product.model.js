import { Schema, model } from "mongoose";

//One to one
//one to many
//many to many

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: false,
        trim: true,
        ref: "user"
    },
    description: {
        type: String,
        required: false,
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    availability: {
        type: Boolean,
        required: true,
        unique: false,
        default: true
    },
    quantity: {
        type: Number,
        required: true,
        unique: false
    }
}, {
    versionKey: false,
    timestamps: true
})

const ProductModel = new model("product", productSchema);
export default ProductModel;