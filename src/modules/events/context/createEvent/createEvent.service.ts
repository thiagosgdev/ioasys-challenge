import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateEventRequestDTO } from 'src/shared/dtos/events/createEventRequest.dto';
import { Event } from 'src/shared/entities/event.entity';
import { Address } from 'src/shared/entities/address.entity';

export class CreateEventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async execute(data: CreateEventRequestDTO) {
    const event = this.eventRepository.create(data.event);
    await this.eventRepository.save(event);

    if (data.address) {
      const address = this.addressRepository.create({
        ...data.address,
        eventId: event.id,
      });
      await this.addressRepository.save(address);
    }
  }
}
