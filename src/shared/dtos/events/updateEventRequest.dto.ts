import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional } from 'class-validator';

import { UpdateAddressRequestDTO } from 'src/shared/dtos/address/updateAddressRequest.dto';
import { UpdateEventObject } from 'src/shared/dtos/events/updateEventObject.dto';

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
