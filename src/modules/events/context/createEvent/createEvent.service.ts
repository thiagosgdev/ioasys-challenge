import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateEventRequestDTO } from 'src/shared/dtos/events/createEventRequest.dto';
import { Event } from 'src/shared/entities/event.entity';

export class CreateEventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
  ) {}
  async execute(data: CreateEventRequestDTO) {
    const event = this.eventRepository.create(data);
    await this.eventRepository.save(event);
    return event;
  }
}
