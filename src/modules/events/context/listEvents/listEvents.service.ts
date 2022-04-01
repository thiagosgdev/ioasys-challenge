import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Event } from 'src/shared/entities/event.entity';

export class ListEventsService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
  ) {}
  async execute() {
    return await this.eventRepository.find();
  }
}
