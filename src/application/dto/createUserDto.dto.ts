import {
  isBoolean,
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password!: string;

  @IsNotEmpty()
  roleId!: string;
  @IsNotEmpty()
  isActive!: boolean;
}
