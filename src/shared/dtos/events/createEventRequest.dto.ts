import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject } from 'class-validator';

import { CreateAddressRequestDTO } from 'src/shared/dtos/address/createAddressRequest.dto';
import { CreateEventObject } from 'src/shared/dtos/events/createEventObject.dto';

export class CreateEventRequestDTO {
  @IsObject()
  @ApiProperty()
  @IsNotEmpty()
  event: CreateEventObject;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  address: CreateAddressRequestDTO;
}
