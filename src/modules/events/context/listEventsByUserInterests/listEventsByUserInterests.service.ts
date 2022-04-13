import { Injectable, NotFoundException } from '@nestjs/common';

import { EventRepo } from '../../repositories/events.repository';

@Injectable()
export class ListEventsByUserInterestsService {
  constructor(private repository: EventRepo) {}

  async execute(userId: string) {
    const events = await this.repository.listEventsByUserInterests(userId);
    if (events.length < 1) throw new NotFoundException('No event found');
    return events;
  }
}
