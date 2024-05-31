import express, { json } from "express";
import connectToMongodb from "./configs/database.config.js";
import userModel from "./models/user.model.js";
import productModel from "./models/product.model.js";
const app = express()

app.use(json());

app.post("/signup", async (req, res) => {
    const data = req.body;

    const user = await userModel.create(data);

    return res.send({ user });
})

//create a product
app.post("/product", async (req, res) => {
    const data = req.body;

    const product = await productModel.create(data);

    return res.send({ product });
})

// get all products
app.get("/product", async (req, res) => {
    const products = await productModel.find();
    return res.send({ products });
})

// get by any field
app.get("/product/search", async (req, res) => {
    const query = req.query;

    const product = await productModel.findOne(query);

    return res.send({ product });
})

// get all products
app.get("/product/available", async (req, res) => {
    const query = req.query;
    const products = await productModel.find(query);
    return res.send({ products });
})

// get a product
app.get("/product/:id", async (req, res) => {
    const id = req.params.id;

    const product = await productModel.findById(id);

    return res.send({ product });
})

// update a product
app.patch("/product/:id", async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    const product = await productModel.findByIdAndUpdate(id, data, { new: true });

    return res.send({ product });
})

// delete all products
app.delete("/product/:id", async (req, res) => {
    const id = req.params.id;

    const deletedProduct = await productModel.findByIdAndDelete(id);

    return res.send({ deletedProduct });
})

app.listen(9871, () => {
    connectToMongodb();
    console.log("Application running on port 9871");
})