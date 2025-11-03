import { Role } from "../../domain/entities/Role";
import { IRoleRepository } from "../../domain/repositories/IRoleRepository";
import { v4 as uuidV4 } from "uuid";
import { CreateRoleDto } from "../dto/createRoleDto.dto";
import { UpdateRoleDto } from "../dto/updateRoleDto.dto";

export class RoleService {
  constructor(private roleRepository: IRoleRepository) {}

  async createRole(createRole: CreateRoleDto): Promise<Role | null> {
    const newRole: Role = {
      id: uuidV4(),
      roleName: createRole.roleName,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.roleRepository.createRole(newRole);
  }

  async updateRole(updateDto:UpdateRoleDto): Promise<Role | null> {


    return this.roleRepository.updateRole(updateDto.id,updateDto.roleName);
  }

  async getRoles(): Promise<Role[] | null> {
    return this.roleRepository.getRoles();
  }
  async getRoleById(id: string): Promise<Role | null> {
    return this.roleRepository.getRoleById(id);
  }
  async getRoleByName(roleName: string): Promise<Role | null> {
    return this.roleRepository.findRoleByName(roleName);
  }
  async deleteById(id: string): Promise<boolean | null> {
    return this.roleRepository.deleteRole(id);
  }

}
