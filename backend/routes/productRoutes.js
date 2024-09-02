import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productfunction.js";

const router = express.Router()


router.get("/",getProducts)
router.post("/",createProduct)
router.put("/:id",updateProduct)

// :id means it is dynamic and user can pass any value on it . 
router.delete("/:id",deleteProduct )

export default router 