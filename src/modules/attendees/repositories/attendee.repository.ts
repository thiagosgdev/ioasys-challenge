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
  async listAttendeeEventsByStatus(data: ListAttendeeEventsRequestDTO) {
    const { userId, status } = data;
    return await this.repository.query(
      `SELECT
            ev.*, ad.*
        FROM
            attendees att
            INNER JOIN events ev ON att.event_id = ev.id
            INNER JOIN addresses ad ON att.event_id = ad.event_id 
            INNER JOIN users us ON att.user_id = us.id
        WHERE
            att.user_id = $1 AND
        att.status = $2`,
      [userId, status],
    );

    //return await this.repository
    //  .createQueryBuilder('events')
    //  .leftJoinAndSelect('events.activities', 'activities')
    //  .leftJoin('events.attendees', 'attendees')
    //  .leftJoin('attendees.users', 'users')
    //  .leftJoinAndSelect('events.addresses', 'addresses')
    //  .leftJoinAndSelect('events.eventAccessibilities', 'eventAccessibilities')
    //  .leftJoinAndSelect('eventAccessibilities.accessibilities', 'disabilities')
    //  .loadRelationCountAndMap('events.numParticipants', 'events.attendees')
    //  .where('date > now()')
    //  .andWhere(`attendees.user_id = $1`, [userId])
    //  .orderBy('is_promoted', 'DESC')
    //  .getMany();
  }
}
