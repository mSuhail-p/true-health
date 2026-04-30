import { Router } from "express";
import Controller from "../controllers/controller.js";
const controller = new Controller();
const router: Router = Router();

router.post("/medicine/scan", controller.handleMedicineScan);

export default router;
