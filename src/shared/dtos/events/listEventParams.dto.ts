import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ListEventsParamsRequest {
  @IsOptional()
  @IsUUID()
  @ApiProperty({
    required: false,
    example: '8ad82d3a-8d1c-4824-891b-61edd704be67',
  })
  eventId?: string;

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    required: false,
    example: '8b1cd03e-b619-4c79-b1f3-888f99a01ef7',
  })
  activityId?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    example: 'true',
  })
  isOnline?: string;

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
