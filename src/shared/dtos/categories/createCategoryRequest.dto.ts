import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  active: boolean;
}
