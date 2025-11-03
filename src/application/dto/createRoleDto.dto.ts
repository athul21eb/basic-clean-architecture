import { IsNotEmpty, MinLength, minLength } from "class-validator";

export class CreateRoleDto {
  @IsNotEmpty()
  @MinLength(3)
  roleName!: string;
}
