import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateAddressRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: '6dc05b64-81e9-4ad6-8875-4b37f7ee0eee',
    required: true,
  })
  addressId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Avenida Paulista',
    required: false,
  })
  street?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 123,
    required: false,
  })
  number?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'São Paulo',
    required: false,
  })
  city?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'SP',
    required: false,
  })
  state?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '12345-678',
    required: false,
  })
  zipCode?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Perto do parque',
    required: false,
  })
  referencePoint?: string;
}
