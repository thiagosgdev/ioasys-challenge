import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateActivityRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  active: boolean;
}
