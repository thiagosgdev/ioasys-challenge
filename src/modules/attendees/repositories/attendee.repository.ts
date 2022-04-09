import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Attendee } from 'src/shared/entities/attendees.entity';
import { ListAttendeeEventsRequestDTO } from 'src/shared/dtos/attendees/listAttendeeEvents.dto';

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
            ev.*
        FROM
            attendees att
            INNER JOIN events ev ON att.event_id = ev.id
            INNER JOIN users us ON att.user_id = us.id
        WHERE
            att.user_id = $1 AND
        att.status = $2`,
      [userId, status],
    );
  }
}
