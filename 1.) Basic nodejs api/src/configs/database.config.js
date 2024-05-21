import mongoose from "mongoose";

function connectToMongodb() {
    mongoose.connect("mongodb+srv://chuksaginamada:chuksaginamada@cluster0.qtcqj61.mongodb.net/")
    .then(() => {
        console.log("Mongodb is connected");
    })
    .catch(() => {
        console.log("Error connecting to database");
    })
}

export default connectToMongodb;