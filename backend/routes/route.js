import express from "express";
import {
  CreateProducts,
  DelProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controller/controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", CreateProducts);
router.put("/:id", updateProduct);
router.get("/:id", getProduct);
router.delete("/:id", DelProduct);

export default router;
