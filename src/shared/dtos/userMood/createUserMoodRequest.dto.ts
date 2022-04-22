import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserMoodRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  moodId: string;
}
