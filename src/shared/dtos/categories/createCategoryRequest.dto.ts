import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Esportes',
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
