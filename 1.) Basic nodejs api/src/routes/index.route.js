import { Router } from "express"
const router = Router();
import productRouter from "./product.route.js";
import authRouter from "./auth.route.js";
import fileRouter from "./file.route.js";

router.use("/api/v1/product", productRouter);
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/file", fileRouter);

export default router;