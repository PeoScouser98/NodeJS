import express from "express";
import { selectAll, selectOne, insert, update, remove } from "../controllers/product";
// create router
const router = express.Router();
// create api
router.get("/product", selectAll);
router.get("/product/:id", selectOne);
router.post("/product", insert);
router.patch("/product/:id", update);
router.delete("/product/:id", remove);
export default router;
