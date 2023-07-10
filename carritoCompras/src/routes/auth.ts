import { Router } from "express";
import authCont from "../controllers/authController";

const router : Router = Router()

router.get('/login', authCont);

export default router