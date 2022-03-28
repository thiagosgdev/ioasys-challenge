import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEventRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  declinedParticipants: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  maybeParticipants: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  confirmedParticipants: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  participants: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  maxParticipants: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  duration: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  typeEvent: string;
}
