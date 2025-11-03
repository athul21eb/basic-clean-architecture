export class User {
  id!: string;
  username!: string;
  email!: string;
  password!: string;
  roleId!:string;
  createdAt!: string;
  updatedAt!: string;
  isActive!: boolean;

  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }
}
