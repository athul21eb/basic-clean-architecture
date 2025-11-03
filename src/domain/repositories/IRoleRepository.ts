import { Role } from "../entities/Role";

export interface IRoleRepository {
  createRole(role: Role): Promise<Role | null>;
  updateRole(id:string,roleName:string): Promise<Role | null>;
  getRoles(): Promise<Role[] | null>;
  getRoleById(id:string): Promise<Role | null>;
  deleteRole(id:string): Promise<boolean | null>;
  findRoleByName(roleName: string): Promise<Role | null>;

}
