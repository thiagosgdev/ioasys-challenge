import { Injectable } from '@nestjs/common';

import { EventRepo } from 'src/modules/events/repositories/events.repository';

@Injectable()
export class ListEventsService {
  constructor(private eventRepository: EventRepo) {}
  async execute(eventId?: string) {
    return await this.eventRepository.listEventAddress(eventId);
  }
}
