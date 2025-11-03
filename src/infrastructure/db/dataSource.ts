import { DataSource } from "typeorm";
import { RoleEntity } from "./entities/Role.entity";
import "reflect-metadata";
export default new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: 'S3cR3tP@sswOrd!',
  database: "UsersDB",
  synchronize: true,
  logging:true,
  entities: [RoleEntity],
  migrations: ["src/infrastructure/migrations/*.ts"],
  options: {
    trustServerCertificate: true,
    encrypt: true,
    connectTimeout: 15000, // 15s timeout
  },
});
