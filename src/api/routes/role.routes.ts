import { Router } from "express";
import { roleController } from "../container";

const router = Router();

router.get("/",roleController.getAllRoles);
router.get("/roleName/:roleName",roleController.getRoleByName);
router.get("/:id",roleController.getRoleById);
router.post("/",roleController.createRole);
router.put("/:id",roleController.updateRole);
router.delete("/:id",roleController.deleteRole)

export default router
