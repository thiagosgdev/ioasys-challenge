import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';

export class ListAttendeeEventsRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ba07b725-2c09-4203-a5b7-386f640277cf',
  })
  userId: string;

  @IsEnum(['CONFIRMED', 'SAVED', 'saved', 'confirmed'])
  @IsNotEmpty()
  @ApiProperty({
    examples: ['CONFIRMED', 'SAVED'],
  })
  status: string;
}
