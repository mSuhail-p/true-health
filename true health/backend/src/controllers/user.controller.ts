import { type Request, type Response } from "express";

class userController {
  public medData = (req: Request, res: Response) => {
    console.log("reached at controller");
  };
}

export default userController;
