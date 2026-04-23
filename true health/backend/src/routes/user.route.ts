import { Router, type Request, type Response } from "express";
import userController from "../controllers/user.controller.js";
const usercontroller = new userController();
const router: Router = Router();

router.get("/med-data", usercontroller.medData);

export default router;
