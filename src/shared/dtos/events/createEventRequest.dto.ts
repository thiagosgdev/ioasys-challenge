import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional } from 'class-validator';

import { CreateAddressRequestDTO } from '../address/createAddressRequest.dto';
import { CreateEventObject } from './createEventObject.dto';

export class CreateEventRequestDTO {
  @IsObject()
  @ApiProperty()
  @IsNotEmpty()
  event: CreateEventObject;

  @IsObject()
  @IsOptional()
  @ApiProperty()
  address?: CreateAddressRequestDTO;
}
