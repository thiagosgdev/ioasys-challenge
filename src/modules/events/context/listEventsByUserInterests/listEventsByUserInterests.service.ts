import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EventRepo } from '../../repositories/events.repository';
import { Event } from '../../../../shared/entities/event.entity';

@Injectable()
export class ListEventsByUserInterestsService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
    private repository: EventRepo,
  ) {}

  async execute(userId: string) {
    const events = await this.repository.listEventsByUserInterests(userId);
    if (events.length < 1) throw new NotFoundException('No event found');
    return events;
  }
}
