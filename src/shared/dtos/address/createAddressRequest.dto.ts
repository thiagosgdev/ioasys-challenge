import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  number: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  zipCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  userId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  eventId?: string;
}
