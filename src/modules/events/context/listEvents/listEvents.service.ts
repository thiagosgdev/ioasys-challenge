import { Injectable } from '@nestjs/common';
import { ListEventsParamsRequest } from 'src/shared/dtos/events/listEventParams.dto';
import { Event } from 'src/shared/entities/event.entity';

import { EventRepo } from '../../repositories/events.repository';

@Injectable()
export class ListEventsService {
  constructor(private eventRepository: EventRepo) {}
  async execute(data?: ListEventsParamsRequest): Promise<Event[]> {
    let take = 0;
    let skip = 0;
    let eventId = '';
    if (data) {
      take = Number(data?.take);
      skip = Number(data?.skip);
      eventId = data?.eventId;
    }

    return await this.eventRepository.listEvents(eventId, take, skip);
  }
}
