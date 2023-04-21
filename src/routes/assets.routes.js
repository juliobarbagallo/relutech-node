import { Router } from "express";
const router = Router()
import * as assetsCtrl from "../controllers/assets.controller";
import { verifyToken, isAdmin } from "../middleware";

router.post('/', [verifyToken, isAdmin], assetsCtrl.createAsset)

router.get('/', assetsCtrl.getAssets)

router.get('/:assetId', assetsCtrl.getAssetById)

router.put('/:assetId',[verifyToken, isAdmin] ,assetsCtrl.updateAssetById)

router.delete('/:assetId',[verifyToken, isAdmin] , assetsCtrl.deleteAssetById)

export default router