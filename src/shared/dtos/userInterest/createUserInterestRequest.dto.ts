import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateUserInterestRequestDTO {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  activityIds: string[];
}
