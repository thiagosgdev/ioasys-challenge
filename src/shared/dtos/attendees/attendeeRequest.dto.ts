import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';

export class AttendeeRequestDTO {
  @IsEnum(['CONFIRMED', 'SAVED', 'saved', 'confirmed'])
  @IsNotEmpty()
  @ApiProperty({
    examples: ['CONFIRMED', 'SAVED'],
  })
  status: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: '6d3c273e-dd69-41ba-b70a-b841bf786ca2',
  })
  eventId: string;
}
