import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateMoodRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Happy',
  })
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: true,
  })
  active: boolean;
}
