import { IsNotEmpty, IsString } from "class-validator";
import { CreateUserDto } from "./createUserDto.dto";

export class UpdateUserDto extends CreateUserDto {
  @IsString()
  @IsNotEmpty()
  id!: string;
}
