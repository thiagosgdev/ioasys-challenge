import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject } from 'class-validator';

export class RequestDTO {
  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  user: RequestUserObject;
}

type RequestUserObject = {
  userId: string;
  role: string;
};
