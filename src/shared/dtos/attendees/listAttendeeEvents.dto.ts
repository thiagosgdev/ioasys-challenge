import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ListAttendeeEventsRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ba07b725-2c09-4203-a5b7-386f640277cf',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    examples: ['CONFIRMED', 'MAYBE', 'DECLINED'],
  })
  status: string;
}
