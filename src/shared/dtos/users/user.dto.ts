import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDate } from 'class-validator';

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
  isPremium: boolean;

  @Exclude()
  @ApiProperty()
  password: string;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;

  @IsDate()
  @ApiProperty()
  deletedAt: Date;
}
