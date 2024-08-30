import express from "express"
import { getLaptop, getLaptopById, creatLaptop, putLaptop, deleteLaptop } from "../controller/Controller.js";
const router = express.Router();

router.get("/", getLaptop);
router.get("/find/:id", getLaptopById);
router.post("/create", creatLaptop);
router.put("/edit/:id", putLaptop);
router.delete("/delete/:id", deleteLaptop);

export default router;