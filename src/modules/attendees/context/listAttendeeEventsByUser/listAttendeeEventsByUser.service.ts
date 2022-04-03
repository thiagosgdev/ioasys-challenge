import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Attendee } from 'src/shared/entities/attendees.entity';
import { ListAttendeeEventsRequestDTO } from 'src/shared/dtos/attendees/listAttendeeEvents.dto';

export class ListAttendeeEventsByUserIdService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(data: ListAttendeeEventsRequestDTO) {
    const { userId, status } = data;
    return await this.attendeeRepository.query(
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
