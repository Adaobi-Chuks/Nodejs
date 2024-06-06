import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: false,
        unique: false,
        trim: true
    }
})

const userModel = new model("user", userSchema);
export default userModel;