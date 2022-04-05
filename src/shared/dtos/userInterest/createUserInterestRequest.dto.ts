import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserInterestRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  activityIds: string[];
}
