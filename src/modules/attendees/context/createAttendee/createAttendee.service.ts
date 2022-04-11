import { Repository } from 'typeorm';
import { Inject, InternalServerErrorException } from '@nestjs/common';

import { CreateAttendeeRequestDTO } from 'src/shared/dtos/attendees/createAttendeeRequest.dto';
import { Attendee } from 'src/shared/entities/attendees.entity';

export class CreateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(userId, data: CreateAttendeeRequestDTO) {
    const { status, eventId } = data;
    const attendee = await this.attendeeRepository.create({
      userId,
      eventId,
      status,
    });

    return await this.attendeeRepository.save(attendee);
  }
}
