import { Router } from "express"
const router = Router();
import productRouter from "./product.route.js";
import authRouter from "./auth.route.js";

router.use("/api/v1/product", productRouter);
router.use("/api/v1/auth", authRouter);

export default router;