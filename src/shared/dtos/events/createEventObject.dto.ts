import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsISO8601,
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

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

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

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  price: number;

  @IsBoolean()
  @IsOptional()
  isPromoted: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userIdentity: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  accessibilities: string[];

  userId?: string;
}
