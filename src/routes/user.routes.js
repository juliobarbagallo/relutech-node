import { Router } from "express";
const router = Router()
import * as userCtrl from "../controllers/user.controller";
import { verifyToken, isAdmin, checkRolesExisted } from "../middleware";

router.post('/', [verifyToken, isAdmin, checkRolesExisted], userCtrl.createUser)

router.get('/', userCtrl.getUsers)

export default router