import AuthController from "../controllers/auth.controller.js";
import { Router } from "express";
import validate from "../middlewares/validate.middleware.js";
import { createUserSchema } from "../schema/user.schema.js";
const router = Router();

router.post("/", validate(createUserSchema), AuthController.signUp);
router.post("/login", AuthController.login);

export default router;