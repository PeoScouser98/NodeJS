import express from "express";
import { selectAll, selectOne, insert, update, remove } from "../controllers/category";

const router = express.Router();
// create api
router.get("/category", selectAll);
router.get("/category/:id", selectOne);
router.post("/category", insert);
router.patch("/category/:id", update);
router.delete("/category/:id", remove);
export default router;
