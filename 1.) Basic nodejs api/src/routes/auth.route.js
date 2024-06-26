import AuthController from "../controllers/auth.controller.js";
import { Router } from "express";
const router = Router();

router.post("/", AuthController.signUp);
router.post("/login", AuthController.login);

export default router;