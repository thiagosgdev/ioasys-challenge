import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Attendee } from '../../../shared/entities/attendees.entity';
import { ListAttendeeEventsRequestDTO } from '../../../shared/dtos/attendees/listAttendeeEvents.dto';

@Injectable()
export class AttendeeRepo {
  constructor(
    @InjectRepository(Attendee)
    private readonly repository: Repository<Attendee>,
  ) {}
  async listAttendeeEventsByStatus(userId: string, status: string) {
    return await this.repository
      .createQueryBuilder('attendees')
      .leftJoinAndSelect('attendees.event', 'event')
      .leftJoinAndSelect('event.users', 'users')
      .leftJoinAndSelect('event.activities', 'activities')
      .leftJoin('activities.userInterests', 'userInterests')
      .leftJoinAndSelect('event.addresses', 'addresses')
      .leftJoinAndSelect('event.eventAccessibilities', 'eventAccessibilities')
      .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
      .loadRelationCountAndMap('event.numParticipants', 'event.attendees')
      .where('date > now()')
      .andWhere('attendees.user_id = :userId', { userId })
      .andWhere('attendees.status = :status', { status })
      .orderBy('is_promoted', 'DESC')
      .getMany();
  }
}
