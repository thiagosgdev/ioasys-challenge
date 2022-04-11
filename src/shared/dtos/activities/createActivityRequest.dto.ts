import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'a456b4f1-9349-4164-ba64-9da2ada8ccf8' })
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  active: boolean;
}
