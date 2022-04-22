import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMessageRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Tip about mental health',
  })
  text: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'b42b786b-f94f-4ee3-b497-a297edf75e9f',
  })
  messageTypeId: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: true,
  })
  active: boolean;
}
