import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Attendee } from '../../entities/attendees.entity';
import { Event } from '../../entities/event.entity';
import { UserInterest } from '../../entities/userInterests.entity';
import { UserMood } from '../../entities/userMoods.entity';

export class UserDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  aboutMe: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  emergencyPhone: string;

  @ApiProperty()
  emergencyName: string;

  @ApiProperty()
  isPremium: boolean;

  @ApiProperty()
  isAdmin: boolean;

  @Exclude()
  @ApiProperty()
  password: string;

  @ApiProperty()
  city: string;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;

  @IsDate()
  @ApiProperty()
  deletedAt: Date;

  attendees?: Attendee[];
  events?: Event[];
  userMoods?: UserMood[];
  userInterests?: UserInterest[];
}
