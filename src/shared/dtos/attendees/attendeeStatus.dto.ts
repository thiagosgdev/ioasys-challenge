import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class AttendeeStatusDTO {
  @IsEnum(['CONFIRMED', 'SAVED', 'saved', 'confirmed'])
  @IsNotEmpty()
  @ApiProperty({
    example: 'CONFIRMED',
  })
  status: string;
}
