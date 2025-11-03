import { Request, Response, NextFunction } from "express";
import { RoleService } from "../../application/services/RoleService";
import { plainToClass } from "class-transformer";
import { CreateRoleDto } from "../../application/dto/createRoleDto.dto";
import { validate } from "class-validator";
import { UpdateRoleDto } from "../../application/dto/updateRoleDto.dto";

export class RoleController {
  constructor(private roleService: RoleService) {}

  createRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createRoleDto = plainToClass(CreateRoleDto, req.body);
      const errors = await validate(createRoleDto);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const newRole = await this.roleService.createRole(createRoleDto);
      return res.status(201).json({ newRole });
    } catch (error) {
      next(error);
    }
  };

  updateRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateRoleDto = plainToClass(UpdateRoleDto, { ...req.body, id: req.params.id });
      const errors = await validate(updateRoleDto);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const updatedRole = await this.roleService.updateRole(updateRoleDto);
      return res.status(200).json({ updatedRole });
    } catch (error) {
      next(error);
    }
  };

  getAllRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allRoles = await this.roleService.getRoles();
      res.status(200).json({ allRoles });
    } catch (error) {
      next(error);
    }
  };

  getRoleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const role = await this.roleService.getRoleById(id);
      res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  };

  getRoleByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roleName = req.params.roleName;
      if (!roleName) {
        return res.status(400).json({ message: "roleName is required" });
      }
      const role = await this.roleService.getRoleByName(roleName);
      res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  };

  deleteRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const isDeleted = await this.roleService.deleteById(id);
      res.status(200).json({ isDeleted });
    } catch (error) {
      next(error);
    }
  };
}
