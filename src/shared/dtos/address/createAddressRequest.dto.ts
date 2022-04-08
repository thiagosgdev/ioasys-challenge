import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressRequestDTO {
  @IsString()
  @IsOptional()
  @ApiProperty()
  street: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  number: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  state: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  zipCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  referencePoint?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  userId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  eventId?: string;
}
