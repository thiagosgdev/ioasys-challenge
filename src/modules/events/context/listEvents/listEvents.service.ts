import { Injectable } from '@nestjs/common';

import { EventRepo } from '../../repositories/events.repository';

@Injectable()
export class ListEventsService {
  constructor(private eventRepository: EventRepo) {}
  async execute(eventId?: string) {
    return await this.eventRepository.listEvents(eventId);
  }
}
