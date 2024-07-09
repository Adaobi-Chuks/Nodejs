import { Router } from "express";
import fileController from "../controllers/file.controller.js";
import upload from "../configs/multer.config.js";
const router = Router();

router.post("/", upload.single("image"), fileController.uploadFile);

export default router;