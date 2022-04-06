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

export class CreateEventObject {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  isOnline?: boolean;

  @IsString()
  @ApiProperty()
  @IsOptional()
  url?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  date: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  isPetFriendly: boolean;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  maxParticipants: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  startTime: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  endTime?: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  activityId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userIdentity: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  accessibilities: string[];
}
