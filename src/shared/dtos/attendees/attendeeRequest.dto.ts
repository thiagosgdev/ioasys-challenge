import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AttendeeRequestDTO {
  @IsString()
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
