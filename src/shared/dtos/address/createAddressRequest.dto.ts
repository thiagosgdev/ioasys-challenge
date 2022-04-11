import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressRequestDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Avenida Paulista',
  })
  street: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 123,
  })
  number: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'São Paulo',
  })
  city: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'SP',
  })
  state: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '12345-678',
  })
  zipCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Next to the Sunset Park',
  })
  referencePoint?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '404d6e94-d948-4e10-9652-c2365e6d6f50',
    required: false,
  })
  userId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'aac11a3b-4fa7-43c9-abac-df068554e2e9',
    required: false,
  })
  eventId?: string;
}
