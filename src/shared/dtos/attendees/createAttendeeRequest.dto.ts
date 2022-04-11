import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAttendeeRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    examples: ['CONFIRMED', 'MAYBE', 'DECLINED'],
  })
  status: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ba07b725-2c09-4203-a5b7-386f640277cf',
  })
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: '6d3c273e-dd69-41ba-b70a-b841bf786ca2',
  })
  eventId: string;
}
