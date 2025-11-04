import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { CreateUserDto } from "../dto/createUserDto.dto";
import { UpdateUserDto } from "../dto/updateUserDto.dto";
import { v4 as uuidV4 } from "uuid";
import { validate } from "class-validator";
import { IRoleRepository } from "../../domain/repositories/IRoleRepository";

export class UserService {
  constructor(private userRepository: IUserRepository ,private roleRepository: IRoleRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {

 const roleExist = await this.roleRepository.getRoleById(createUserDto.roleId);
 if(!roleExist) throw new Error("Role not found");

    const newUser: User = {
      id: uuidV4(),
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      role :roleExist,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: createUserDto.isActive,
    };

    return this.userRepository.createUser(newUser);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.userRepository.updateUser(updateUserDto.id, updateUserDto);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.deleteUser(id);
  }
}
