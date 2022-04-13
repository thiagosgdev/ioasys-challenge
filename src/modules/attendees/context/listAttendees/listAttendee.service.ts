import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Attendee } from '../../../../shared/entities/attendees.entity';

export class ListAttendeesService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
  ) {}
  async execute() {
    return await this.attendeeRepository.find();
  }
}
