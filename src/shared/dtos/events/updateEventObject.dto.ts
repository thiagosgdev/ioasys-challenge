import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateEventObject {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  eventId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  isOnline?: boolean;

  @IsString()
  @ApiProperty()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  date?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  isPetFriendly?: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  maxParticipants?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  startTime?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  endTime?: string;

  @IsUUID()
  @IsOptional()
  @ApiProperty()
  activityId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  userIdentity?: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  accessibilities?: string[];
}
