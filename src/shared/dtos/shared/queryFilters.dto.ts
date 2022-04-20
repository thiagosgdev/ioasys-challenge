import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryFiltersRequest {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: '5',
  })
  skip?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: '10',
  })
  take?: string;
}
