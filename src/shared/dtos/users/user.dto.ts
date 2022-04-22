import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Attendee } from '../../entities/attendees.entity';
import { Event } from '../../entities/event.entity';
import { UserInterest } from '../../entities/userInterests.entity';
import { UserMood } from '../../entities/userMoods.entity';

export class UserDTO {
  @ApiProperty({
    example: '',
  })
  id: string;

  @ApiProperty({
    example: 'Jon Doe',
  })
  name: string;

  @ApiProperty({
    example: 'jon@test.com',
  })
  email: string;

  @ApiProperty({
    example: 'Random fact about me',
  })
  aboutMe: string;

  @ApiProperty({
    example: '(11) 11111-1111',
  })
  phone: string;

  @ApiProperty({
    example: '(11) 11111-1111',
  })
  emergencyPhone: string;

  @ApiProperty({
    example: 'Mary Ann',
  })
  emergencyName: string;

  @ApiProperty({
    example: false,
  })
  isPremium: boolean;

  @ApiProperty({
    example: false,
  })
  isAdmin: boolean;

  @Exclude()
  password: string;

  @ApiProperty({
    example: 'Sao Paulo',
  })
  city: string;

  @IsDate()
  @ApiProperty({
    example: new Date(),
  })
  createdAt: Date;

  @IsDate()
  @ApiProperty({
    example: null,
  })
  updatedAt: Date;

  @IsDate()
  @ApiProperty({
    example: null,
  })
  deletedAt: Date;

  attendees?: Attendee[];
  events?: Event[];
  userMoods?: UserMood[];
  userInterests?: UserInterest[];
}
