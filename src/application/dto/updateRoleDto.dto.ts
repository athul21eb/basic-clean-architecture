import { IsNotEmpty, IsString } from "class-validator";
import { CreateRoleDto } from "./createRoleDto.dto";

export class UpdateRoleDto extends CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  id:string
}
