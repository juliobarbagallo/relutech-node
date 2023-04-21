import { Router } from "express";
const router = Router()
import * as assetsCtrl from "../controllers/assets.controller";

router.post('/', assetsCtrl.createAsset)

router.get('/', assetsCtrl.getAssets)

router.get('/:assetId', assetsCtrl.getAssetById)

router.put('/:assetId', assetsCtrl.updateAssetById)

router.delete('/:assetId', assetsCtrl.deleteAssetById)

export default router