import { Injectable } from '@nestjs/common';

import { QueryFiltersRequest } from 'src/shared/dtos/shared/queryFilters.dto';
import { Event } from 'src/shared/entities/event.entity';

import { EventRepo } from '../../repositories/events.repository';

@Injectable()
export class ListOrganizerEventsService {
  constructor(private eventRepository: EventRepo) {}
  async execute(userId: string, data?: QueryFiltersRequest): Promise<Event[]> {
    let take = 0;
    let skip = 0;
    if (data) {
      take = Number(data?.take);
      skip = Number(data?.skip);
    }

    return await this.eventRepository.listOrganizerEvents(userId, take, skip);
  }
}
