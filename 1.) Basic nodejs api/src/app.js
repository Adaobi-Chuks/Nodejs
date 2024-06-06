import express, { json } from "express";
import connectToMongodb from "./configs/database.config.js";
const app = express();
import router from "./routes/product.route.js";

app.use(json());
app.use("/api/v1/product", router);

app.listen(9871, () => {
    connectToMongodb();
    console.log("Application running on port 9871");
})