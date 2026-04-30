import { type Request, type Response } from "express";
import type { Medicine } from "../interfaces/user.interface.js";
import Service from "../services/service.js";

const service = new Service();

class Controller {
  public handleMedicineScan = (req: Request, res: Response) => {
    const medicine: string = String(req.body);
    console.log( medicine, "it is body form postmon");
    service.useGemini(medicine);
  };
}

export default Controller;
