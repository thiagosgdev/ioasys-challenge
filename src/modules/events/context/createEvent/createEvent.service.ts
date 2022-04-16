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
    const event = this.eventRepository.create(data.event);
    await this.eventRepository.save(event);

    if (data.event.accessibilities) {
      const eventAccessibility = {
        eventId: event.id,
        disabilityId: '',
      };
      let newEventAccessibility: EventAccessibility;
      const accessibilities = data.event.accessibilities;

      accessibilities.forEach(async (accessibility) => {
        eventAccessibility.disabilityId = accessibility;
        newEventAccessibility =
          this.eventAccessibilityRepository.create(eventAccessibility);
        await this.eventAccessibilityRepository.save(newEventAccessibility);
      });
    }
    if (data.address) {
      const address = this.addressRepository.create({
        ...data.address,
        eventId: event.id,
      });
      await this.addressRepository.save({
        ...data.address,
        eventId: event.id,
      });
      return { event, address };
    }
    return { event };
  }
}
