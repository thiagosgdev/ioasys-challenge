import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserInterestRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  activityId: string;
}
