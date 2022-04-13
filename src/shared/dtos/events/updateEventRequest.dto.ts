import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional } from 'class-validator';

import { UpdateAddressRequestDTO } from '../address/updateAddressRequest.dto';
import { UpdateEventObject } from './updateEventObject.dto';

export class UpdateEventRequestDTO {
  @IsObject()
  @ApiProperty()
  @IsOptional()
  event?: UpdateEventObject;

  @IsObject()
  @IsOptional()
  @ApiProperty()
  address?: UpdateAddressRequestDTO;
}
