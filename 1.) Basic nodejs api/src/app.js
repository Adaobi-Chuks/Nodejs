import express, { json } from "express";
import connectToMongodb from "./configs/database.config.js";
import userModel from "./models/user.model.js";
const app = express()


app.use(json());

app.post("/signup", async(req, res) => {
    const data = req.body;

    const user = await userModel.create(data);

    return res.send({user});
})



app.listen(9871, () => {
    connectToMongodb();
    console.log("Application running on port 9871");
})