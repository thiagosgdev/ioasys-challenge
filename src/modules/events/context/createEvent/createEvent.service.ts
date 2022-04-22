import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateEventRequestDTO } from '../../../../shared/dtos/events/createEventRequest.dto';
import { Event } from '../../../../shared/entities/event.entity';
import { Address } from '../../../../shared/entities/address.entity';
import { EventAccessibility } from '../../../../shared/entities/eventAccessibility.entity';
import { RequestUserObject } from '../../../../shared/dtos/shared/request.dto';

export class CreateEventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
    @Inject('EVENT_ACCESSIBILITY_REPOSITORY')
    private eventAccessibilityRepository: Repository<EventAccessibility>,
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async execute(user: RequestUserObject, data: CreateEventRequestDTO) {
    data.event.userId = user.userId;

    if (user.role !== 'premium') {
      data.event.isPromoted = false;
    }
    const event = await this.eventRepository.save(data.event);

    if (data.event.accessibilities) {
      const newEventAccessibility = [];

      data.event.accessibilities.forEach(async (accessibility) => {
        newEventAccessibility.push({
          eventId: event.id,
          disabilityId: accessibility,
        });
      });

      await this.eventAccessibilityRepository.save(newEventAccessibility);
    }
    if (data.address) {
      const address = await this.addressRepository.save({
        ...data.address,
        eventId: event.id,
      });
      return { event, address };
    }
    return { event };
  }
}
