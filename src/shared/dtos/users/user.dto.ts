import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  email: string;

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
