import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateAttendeeRequestDTO } from 'src/shared/dtos/attendees/createAttendeeRequest.dto';
import { Attendee } from 'src/shared/entities/attendees.entity';

export class CreateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute(data: CreateAttendeeRequestDTO) {
    const attendee = this.attendeeRepository.create(data);
    return await this.attendeeRepository.save(attendee);
  }
}
