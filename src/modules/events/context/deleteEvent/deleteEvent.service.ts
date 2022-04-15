import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { Event } from '../../../../shared/entities/event.entity';

export class DeleteEventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
  ) {}
  async execute(userId: string, eventId: string) {
    await this.eventRepository.softDelete([eventId, userId]);
  }
}
