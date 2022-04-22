import { Repository } from 'typeorm';
import { ConflictException, Inject } from '@nestjs/common';

import { AttendeeRequestDTO } from '../../../../shared/dtos/attendees/attendeeRequest.dto';
import { Attendee } from '../../../../shared/entities/attendees.entity';

export class CreateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(userId, data: AttendeeRequestDTO) {
    const eventId = data.eventId;
    const status = data.status.toUpperCase();

    const exists = await this.attendeeRepository.findOne({
      where: {
        eventId,
        userId,
      },
    });

    if (exists)
      throw new ConflictException('User already registered for this event!');

    return await this.attendeeRepository.save({
      userId,
      eventId,
      status,
    });
  }
}
