import { ApiProperty } from '@nestjs/swagger';

import { EventResponseDTO } from './event.dto';
import { AddressResponse } from '../address/address.dto';

export class EventAddressResponseDTO {
  @ApiProperty()
  event: EventResponseDTO;

  @ApiProperty()
  address?: AddressResponse | undefined;
}
