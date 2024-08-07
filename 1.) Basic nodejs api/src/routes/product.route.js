import { Router } from "express"
const router = Router();
import ProductController from "../controllers/product.controller.js"
import validate from "../middlewares/validate.middleware.js";
import { createProductSchema } from "../schema/product.schema.js";
import authenticate from "../middlewares/authentication.middleware.js";
import isAdmin from "../middlewares/authorization.middleware.js";

//ENDPOINT -> AUTHENTICATION -> AUTHORIZATION -> VALIDATION -> CONTROLLER METHOD
router.post("/", authenticate, isAdmin, validate(createProductSchema), ProductController.createProduct);

router.get("/", ProductController.getProducts);
router.get("/query", ProductController.getProductQuery);
router.get("/allquery", ProductController.getAllProductQuery);
router.get("/:id",ProductController.getProductById);

router.patch("/:id", ProductController.updateProductById);

router.delete("/:id", ProductController.deleteProductById);

export default router;