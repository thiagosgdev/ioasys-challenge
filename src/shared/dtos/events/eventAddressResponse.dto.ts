import { ApiProperty } from '@nestjs/swagger';

import { Address } from 'src/shared/entities/address.entity';
import { Event } from 'src/shared/entities/event.entity';

export class EventAddressResponseDTO {
  @ApiProperty()
  event: Event;

  @ApiProperty()
  address?: Address | undefined;
}
