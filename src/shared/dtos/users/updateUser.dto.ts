import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsString()
  @Exclude()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty()
  password?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  aboutMe: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  city: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  emergencyPhone?: string;
}
