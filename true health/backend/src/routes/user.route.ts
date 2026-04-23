import { Router, type Request, type Response } from "express"
const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("it is working")
})

export default router

