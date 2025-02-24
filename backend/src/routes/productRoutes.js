import express from "express";
import getAllProduct from "../controlles/productController.js";

const router = express.Router();

router.get("/", getAllProduct);

export default router