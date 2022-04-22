import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignUpDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  phone: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyName: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyPhone: string;
}
