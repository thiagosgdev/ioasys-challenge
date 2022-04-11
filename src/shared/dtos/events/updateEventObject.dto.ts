import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateEventObject {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: '6dc05b64-81e9-4ad6-8875-4b37f7ee0eee',
    required: true,
  })
  eventId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'New event',
    required: false,
  })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'New description',
    required: false,
  })
  description?: string;

  @IsBoolean()
  @ApiProperty({
    example: true,
    required: false,
  })
  @IsOptional()
  isOnline?: boolean;

  @IsString()
  @ApiProperty({
    example: 'www.google.com',
    required: false,
  })
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '05/25/2022',
    required: false,
  })
  date?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: true,
    required: false,
  })
  isPetFriendly?: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 10,
    required: false,
  })
  maxParticipants?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '10:30',
    required: false,
  })
  startTime?: string;

  @IsUUID()
  @IsOptional()
  @ApiProperty({
    example: 'c20d379d-0774-43d5-aa78-0e94480b3fe8',
    required: false,
  })
  activityId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '123.456.789-99',
    required: false,
  })
  userIdentity?: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: 'a7dc7c2b-4a7a-450e-b574-6b6f7ff5e14b',
    required: false,
  })
  accessibilities?: string[];
}
