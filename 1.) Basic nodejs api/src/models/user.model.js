import { Schema, model } from "mongoose";

const userSchema = new Schema({
    // _id
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    role: {
        type: String,
        required: true,
        unique: false,
        enum: ["user", "admin"],
        default: "user"
    },
    image: {
        type: String,
        required: true,
        unique: false
    }
}, {
    strict: false
})

const userModel = new model("user", userSchema);
export default userModel;