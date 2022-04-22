import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateActivityRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'a456b4f1-9349-4164-ba64-9da2ada8ccf8' })
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  active: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example:
      'https://randomwordgenerator.com/img/picture-generator/52e1d5424b56aa14f1dc8460962e33791c3ad6e04e50744074267bd69149c7_640.jpg',
  })
  urlActive: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example:
      'https://randomwordgenerator.com/img/picture-generator/57e8d4474a51ae14f1dc8460962e33791c3ad6e04e507440742a7ad19e49cc_640.jpg',
  })
  urlInactive: string;
}
