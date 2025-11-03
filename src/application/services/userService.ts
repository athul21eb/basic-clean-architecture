import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/entities/User';
import { CreateUserDto } from '../dto/createUserDto.dto';
import { UpdateUserDto } from '../dto/updateUserDto.dto';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    const newUser = new User(createUserDto);
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
