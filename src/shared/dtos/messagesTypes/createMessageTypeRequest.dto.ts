import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageTypeRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Mental Health',
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
