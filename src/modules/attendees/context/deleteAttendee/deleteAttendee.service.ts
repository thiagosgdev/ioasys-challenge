import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { Attendee } from '../../../../shared/entities/attendees.entity';

export class DeleteAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(userId: string, eventId: string) {
    await this.attendeeRepository.softDelete({
      eventId,
      userId,
    });
  }
}
