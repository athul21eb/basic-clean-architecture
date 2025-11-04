import { Repository } from "typeorm";
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserEntity } from "../db/entities/User.entity";
import AppDataSource from "../db/dataSource";

export class UserRepository implements IUserRepository {
  private userRepository: Repository<UserEntity> =
    AppDataSource.getRepository(UserEntity);

  async createUser(user: User): Promise<User | null> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }
  async getUserbyEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ email });
  }
  async getUserbyUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ username });
  }
  async updateUser(id: string, user: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOneBy({ id });
  }
  async deleteUser(id: string): Promise<boolean> {
    const deleteResult = await this.userRepository.delete(id);
    return deleteResult.affected! > 0;
  }
  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
