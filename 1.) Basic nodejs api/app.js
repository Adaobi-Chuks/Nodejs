import express from "express";
const app = express()


app.get("/", (req, res) => {
    res.send("Welcome to our e-commerce site");
})

app.get("/products", (req, res) => {
    res.send("Laptops, phones, tablets");
})


app.listen(9871, () => {
    console.log("Application running on port 9871");
})