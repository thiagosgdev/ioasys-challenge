import { Injectable } from '@nestjs/common';
import { Event } from 'src/shared/entities/event.entity';

import { EventRepo } from '../../repositories/events.repository';

@Injectable()
export class ListEventsService {
  constructor(private eventRepository: EventRepo) {}
  async execute(eventId?: string): Promise<Event[]> {
    return await this.eventRepository.listEvents(eventId);
  }
}
