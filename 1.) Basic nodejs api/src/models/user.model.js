import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    email: String,
    password: String,
    age: Number
})

const userModel = new model("user", userSchema);
export default userModel;