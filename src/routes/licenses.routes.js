import { Router } from "express";
const router = Router()
import * as licensesCtrl from "../controllers/licenses.controller";
import { verifyToken, isAdmin } from "../middleware";

router.post('/', [verifyToken, isAdmin], licensesCtrl.createLicense);

router.get('/', licensesCtrl.getLicenses);

router.get('/:licenseId', licensesCtrl.getLicenseById);

router.put('/:licenseId', [verifyToken, isAdmin], licensesCtrl.updateLicenseById);

router.delete('/:licenseId', [verifyToken, isAdmin], licensesCtrl.deleteLicenseById);

export default router;
