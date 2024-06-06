import express, { json } from "express";
import cookieParser from "cookie-parser";
import connectToMongodb from "./configs/database.config.js";
const app = express();
import productRouter from "./routes/product.route.js";
import authRouter from "./routes/auth.route.js";

app.use(json());
app.use(cookieParser());

app.use("/api/v1/product", productRouter);
app.use("/api/v1/auth", authRouter);

app.listen(9871, () => {
    connectToMongodb();
    console.log("Application running on port 9871");
})