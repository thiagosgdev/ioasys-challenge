import { Repository } from 'typeorm';
import { Inject, NotFoundException } from '@nestjs/common';

import { AttendeeRequestDTO } from '../../../../shared/dtos/attendees/attendeeRequest.dto';
import { Attendee } from '../../../../shared/entities/attendees.entity';

export class UpdateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(userId: string, data: AttendeeRequestDTO) {
    const eventId = data.eventId;
    const status = data.status.toUpperCase();

    const attendeeExists = await this.attendeeRepository.findOne({
      where: {
        eventId,
        userId,
      },
    });

    if (!attendeeExists)
      throw new NotFoundException('User not registered for this event!');

    attendeeExists.status = status;

    return await this.attendeeRepository.save(attendeeExists);
  }
}
