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
    return await this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.activities', 'activities')
      .leftJoin('events.attendees', 'attendees')
      .leftJoin('attendees.users', 'users')
      .leftJoinAndSelect('events.addresses', 'addresses')
      .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
      .orderBy('is_promoted', 'DESC')
      .where('date > now()')
      .andWhere(`attendees.user_id = '${userId}'`)
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
