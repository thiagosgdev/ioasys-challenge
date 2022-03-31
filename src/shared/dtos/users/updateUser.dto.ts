import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDTO {
  id?: string;
  @IsOptional()
  @IsString()
  @ApiProperty()
  firstName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsOptional()
  @IsString()
  @Exclude()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty()
  password?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  phone?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyPhone?: string;
}
