import { User } from "../entities/User";

export interface IUserRepository {
  createUser(user: User): Promise<User|null>;
  getUserById(id: string): Promise<User | null>;
  getUserbyUsername(username: string): Promise<User | null>;
  getUserbyEmail(email: string): Promise<User | null>;
  getUserbyEmail(email: string): Promise<User | null>;
  updateUser(id: string, user: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
  getUsers(): Promise<User[]>;

  // assignRoleToUser(userId: string, roleId: string): Promise<boolean>;
}