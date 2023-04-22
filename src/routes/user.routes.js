import { Router } from "express";
const router = Router()
import * as userCtrl from "../controllers/user.controller";
import { verifyToken, isAdmin, checkRolesExisted } from "../middleware";



router.get('/', userCtrl.getUsers)

router.get('/:userId' ,userCtrl.getUserById)

router.delete('/:userId',[verifyToken, isAdmin], userCtrl.deleteUserById)

export default router