import { Repository } from "typeorm";
import { IRoleRepository } from "../../domain/repositories/IRoleRepository";
import { RoleEntity } from "../db/entities/Role.entity";
import  AppDataSource  from "../db/dataSource";
import { Role } from "../../domain/entities/Role";

export class RoleRepository implements IRoleRepository {
  private roleRepo: Repository<RoleEntity> =
    AppDataSource.getRepository(RoleEntity);

  async createRole(role: Role): Promise<Role | null> {
    const newRole = this.roleRepo.create(role);
    return this.roleRepo.save(newRole);
  }
  async updateRole(id:string,roleName:string): Promise<Role | null> {
    const existingRole = await this.getRoleById(id);

    if(!existingRole)return null;

    existingRole.roleName = roleName;
    existingRole.updatedAt = new Date();
    return this.roleRepo.save(existingRole);
  }
  async getRoles(): Promise<Role[] | null> {
    return this.roleRepo.find();
  }
  async getRoleById(id: string): Promise<Role | null> {
    return this.roleRepo.findOneBy({ id });
  }
  async deleteRole(id: string): Promise<boolean | null> {
    return (await this.roleRepo.delete(id)).affected === 1;
  }
  findRoleByName(roleName: string): Promise<Role | null> {
    console.log("in repo",roleName)
        return this.roleRepo.findOneBy({roleName});

  }
}
