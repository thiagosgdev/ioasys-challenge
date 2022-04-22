import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressRequestDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Street Jon Doe',
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
    example: 'São Sebastião',
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
  userId?: string;

  @IsString()
  @IsOptional()
  eventId?: string;
}
