import { Injectable } from '@nestjs/common';
import { ListEventsParamsRequest } from 'src/shared/dtos/events/listEventParams.dto';
import { Event } from 'src/shared/entities/event.entity';

import { EventRepo } from '../../repositories/events.repository';

@Injectable()
export class ListEventsService {
  constructor(private eventRepository: EventRepo) {}
  async execute(data?: ListEventsParamsRequest): Promise<Event[]> {
    const take = Number(data?.take) ? Number(data.take) : null;
    const skip = Number(data?.skip) ? Number(data.skip) : 0;
    const eventId = data?.eventId ? data.eventId : '';
    const activityId = data?.activityId ? data.activityId : '';
    const isOnline = data?.isOnline ? data.isOnline : null;

    return await this.eventRepository.listEvents(
      eventId,
      activityId,
      isOnline,
      take,
      skip,
    );
  }
}
