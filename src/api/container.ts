import { RoleRepository } from "../infrastructure/repositories/Role.repository";
import { RoleService } from "../application/services/RoleService";
import { RoleController } from "./controllers/role.controller";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { User } from "../domain/entities/User";
import { UserService } from "../application/services/userService";
import { UserController } from "./controllers/user.controller";
import { UserRepository } from "../infrastructure/repositories/User.repository";

// Role
const roleRepository = new RoleRepository();
const roleService = new RoleService(roleRepository);
export const roleController = new RoleController(roleService);

// User
const userRepository = new UserRepository();
const userService = new UserService(userRepository,roleRepository);
export const userController = new UserController(userService);
