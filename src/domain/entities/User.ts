import { Role } from "./Role";

export class User {
  id!: string;
  username!: string;
  email!: string;
  password!: string;
  role!:Role;
  createdAt!: Date;
  updatedAt!: Date;
  isActive!: boolean;


}
