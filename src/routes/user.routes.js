import { Router } from "express";
const router = Router()
import * as userCtrl from "../controllers/user.controller";
import { verifyToken, isAdmin } from "../middleware";

router.post('/', [verifyToken, isAdmin], userCtrl.createUser)

export default router