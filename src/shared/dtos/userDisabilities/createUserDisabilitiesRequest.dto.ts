import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateUserDisabilityRequestDTO {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  disabilityIds: string[];
}
