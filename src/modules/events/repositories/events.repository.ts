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
  async listEventsByUserInterests(
    userId: string,
    activityIds?: string[],
    take?: number,
    skiṕ?: number,
  ): Promise<Event[]> {
    const query = this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.users', 'users')
      .leftJoinAndSelect('events.activities', 'activities')
      .leftJoin('activities.userInterests', 'userInterests')
      .leftJoin('events.attendees', 'attendees')
      .leftJoinAndSelect('events.addresses', 'addresses')
      .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
      .andWhere('date > now()')
      .andWhere(`userInterests.user_id = :userId`, { userId });

    query.addOrderBy(`${query.alias}.is\Promoted`, 'DESC');

    if (take) query.offset(take);
    if (skiṕ) query.limit(skiṕ);
    if (activityIds.length > 0)
      query.orWhere('activities.id IN (:...ids)', { ids: activityIds });

    return await query.getMany();
  }

  async listEvents(
    eventId?: string,
    take?: number,
    skip?: number,
  ): Promise<Event[]> {
    console.log(skip);
    const query = this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.users', 'users')
      .leftJoinAndSelect('events.activities', 'activities')
      .leftJoinAndSelect('events.addresses', 'addresses')
      .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
      .where('date > now()');

    query.addOrderBy(`${query.alias}.is\Promoted`, 'DESC');

    if (eventId) query.andWhere({ id: eventId });

    if (skip) query.skip(skip);
    if (take) query.take(take);

    return await query.getMany();
  }

  async listOrganizerEvents(
    userId: string,
    take?: number,
    skip?: number,
  ): Promise<Event[]> {
    console.log(userId);

    const query = this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.users', 'users')
      .leftJoinAndSelect('events.activities', 'activities')
      .leftJoinAndSelect('events.addresses', 'addresses')
      .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
      .where('date > now()')
      .andWhere('events.user_id = :userId', { userId });

    query.addOrderBy(`${query.alias}.is\Promoted`, 'DESC');

    if (skip) query.skip(skip);
    if (take) query.take(take);

    return await query.getMany();
  }
}
