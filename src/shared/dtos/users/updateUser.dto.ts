import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: 'Jon Doe',
  })
  name?: string;

  @IsOptional()
  @IsString()
  @Exclude()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty({
    required: false,
    example: 'randomPassword',
  })
  password?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: 'Random fact about me',
  })
  aboutMe?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: 'Gondor',
  })
  city?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: '(11) 11111-1111',
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
    example: '(11) 11111-1111',
  })
  emergencyPhone?: string;
}
