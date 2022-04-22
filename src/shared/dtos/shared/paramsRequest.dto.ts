import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ParamsRequestDTO {
  @IsString()
  @IsOptional()
  @ApiProperty()
  orderBy?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  orderDirection?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  isOnline?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  date?: string;
}
