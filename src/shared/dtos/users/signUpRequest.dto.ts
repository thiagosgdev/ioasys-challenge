import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpRequestDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty()
  passwordConfirmation: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  phone: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyName: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  emergencyPhone: number;
}
