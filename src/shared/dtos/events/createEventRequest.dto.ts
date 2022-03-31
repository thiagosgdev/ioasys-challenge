import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateEventRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsISO8601()
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  minimumAge: number;

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

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  isAccessible: boolean;
}
