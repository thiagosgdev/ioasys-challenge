import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserDisabilityRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  disabilityIds: string[];
}
