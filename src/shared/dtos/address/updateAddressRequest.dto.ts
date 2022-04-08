import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateAddressRequestDTO {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  addressId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  street?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  number?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  city?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  state?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  zipCode?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  referencePoint?: string;
}
