import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpRequestDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    example: 'Jon Doe',
  })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    required: true,
    example: 'jon@test.com',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty({
    required: true,
    example: 'randomPassword',
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty({
    required: true,
    example: 'randomPassword',
  })
  passwordConfirmation: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: '(11)11111-1111',
  })
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: 'Mary Ann',
  })
  emergencyName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: '(11)11111-1111',
  })
  emergencyPhone?: string;
}
