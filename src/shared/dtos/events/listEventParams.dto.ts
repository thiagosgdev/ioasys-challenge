import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ListEventsParamsRequest {
  @IsOptional()
  @IsUUID()
  @ApiProperty({
    required: false,
    example: '8ad82d3a-8d1c-4824-891b-61edd704be67',
  })
  eventId: string;

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
