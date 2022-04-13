import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from '../../../shared/entities/event.entity';

@Injectable()
export class EventRepo {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  async listEventsByUserInterests(userId: string): Promise<Event[]> {
    console.log(userId);
    return await this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.activities', 'activities')
      .leftJoin('activities.userInterests', 'userInterests')
      .leftJoin('events.attendees', 'attendees')
      .leftJoinAndSelect('events.addresses', 'addresses')
      .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
      .where('date > now()')
      .andWhere(`userInterests.user_id = :userId`, { userId })
      .orderBy('is_promoted', 'DESC')
      .getMany();
  }

  async listEvents(eventId?: string): Promise<Event[]> {
    const query = await this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.activities', 'activities')
      .leftJoinAndSelect('events.addresses', 'addresses')
      .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
      .orderBy('is_promoted', 'DESC')
      .where('date > now()');

    if (eventId) query.andWhere({ id: eventId });

    return query.getMany();
  }
}
