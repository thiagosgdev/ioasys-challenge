import { Repository } from 'typeorm';
import { ConflictException, Inject } from '@nestjs/common';

import { CreateAttendeeRequestDTO } from '../../../../shared/dtos/attendees/createAttendeeRequest.dto';
import { Attendee } from '../../../../shared/entities/attendees.entity';

export class CreateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(userId, data: CreateAttendeeRequestDTO) {
    const { status, eventId } = data;

    const exists = await this.attendeeRepository.findOne({
      where: {
        eventId,
        userId,
      },
    });

    if (exists)
      throw new ConflictException('User already registered for this event!');

    const attendee = this.attendeeRepository.create({
      userId,
      eventId,
      status,
    });

    return await this.attendeeRepository.save(attendee);
  }
}
