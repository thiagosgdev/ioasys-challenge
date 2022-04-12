import { Repository } from 'typeorm';
import { Inject, NotFoundException } from '@nestjs/common';

import { Event } from 'src/shared/entities/event.entity';
import { Address } from 'src/shared/entities/address.entity';
import { UpdateEventRequestDTO } from 'src/shared/dtos/events/updateEventRequest.dto';
import { EventAddressResponseDTO } from 'src/shared/dtos/events/eventAddressResponse.dto';
import { EventAccessibility } from 'src/shared/entities/eventAccessibility.entity';

export class UpdateEventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
    @Inject('EVENT_ACCESSIBILITY_REPOSITORY')
    private eventAccessibilityRepository: Repository<EventAccessibility>,
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async execute(data: UpdateEventRequestDTO) {
    const eventExists = await this.eventRepository.findOne(data.event.eventId);
    let updatedAddress = undefined;
    if (!eventExists) throw new NotFoundException('No event found!');

    const updatedEvent = await this.eventRepository.save({
      ...eventExists,
      ...data.event,
    });

    if (data.event.accessibilities) {
      const eventAccessibility = {
        eventId: data.event.eventId,
        disabilityId: '',
      };
      let newEventAccessibility: EventAccessibility;
      const accessibilities = data.event.accessibilities;

      await this.eventAccessibilityRepository.delete({
        eventId: data.event.eventId,
      });

      accessibilities.forEach(async (accessibility) => {
        eventAccessibility.disabilityId = accessibility;
        newEventAccessibility =
          this.eventAccessibilityRepository.create(eventAccessibility);
        await this.eventAccessibilityRepository.save(newEventAccessibility);
      });
    }

    if (data.address) {
      const addressExists = await this.addressRepository.findOne({
        where: {
          eventId: data.event.eventId,
        },
      });

      updatedAddress = await this.addressRepository.save({
        ...addressExists,
        ...data.address,
      });
    }
    return { event: updatedEvent, address: updatedAddress };
  }
}
