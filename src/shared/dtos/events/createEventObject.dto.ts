import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateEventObject {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Beach Volleyball',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Volleyball match at the Cambury Beach',
  })
  description: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: false,
  })
  isOnline?: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  url?: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '05/25/2022',
  })
  date: Date;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: false,
  })
  isPetFriendly: boolean;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 20,
  })
  maxParticipants: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '18:00',
  })
  startTime: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: '20:00',
  })
  endTime?: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '690899bf-3ef1-4339-9183-4f4bc2fa7537',
  })
  activityId: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 10,
  })
  price: number;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: false,
  })
  isPromoted: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '999.999.999-99',
  })
  userIdentity: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: [
      '690899bf-3ef1-4339-9183-4f4bc2fa7537',
      'd3c79d13-6240-4427-a2fa-91f4f33b9512',
    ],
  })
  accessibilities: string[];

  userId?: string;
}
