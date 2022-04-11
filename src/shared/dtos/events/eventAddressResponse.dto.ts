import { ApiProperty } from '@nestjs/swagger';

import { EventResponseDTO } from 'src/shared/dtos/events/event.dto';
import { AddressResponse } from 'src/shared/dtos/address/address.dto';

export class EventAddressResponseDTO {
  @ApiProperty()
  event: EventResponseDTO;

  @ApiProperty()
  address?: AddressResponse | undefined;
}
