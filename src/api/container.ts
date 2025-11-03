import { RoleRepository } from "../infrastructure/repositories/Role.repository";
import { RoleService } from "../application/services/RoleService";
import { RoleController } from "./controllers/role.controller";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { User } from "../domain/entities/User";
import { UserService } from "../application/services/userService";
import { UserController } from "./controllers/user.controller";

// Role
const roleRepository = new RoleRepository();
const roleService = new RoleService(roleRepository);
export const roleController = new RoleController(roleService);

// User
class UserRepository implements IUserRepository {
  createUser(user: User): Promise<User | null> {
    console.log("createUser", user);
    return Promise.resolve(user);
  }
  getUserById(id: string): Promise<User | null> {
    console.log("getUserById", id);
    return Promise.resolve(null);
  }
  getUserbyEmail(email: string): Promise<User | null> {
    console.log("getUserbyEmail", email);
    return Promise.resolve(null);
  }
  updateUser(id: string, user: Partial<User>): Promise<User | null> {
    console.log("updateUser", id, user);
    return Promise.resolve(null);
  }
  deleteUser(id: string): Promise<boolean> {
    console.log("deleteUser", id);
    return Promise.resolve(true);
  }
  getUsers(): Promise<User[]> {
    console.log("getUsers");
    return Promise.resolve([]);
  }
  assignRoleToUser(userId: string, roleId: string): Promise<boolean> {
    console.log("assignRoleToUser", userId, roleId);
    return Promise.resolve(true);
  }
}
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
export const userController = new UserController(userService);
