import { Injectable } from '@nestjs/common';
import { ListAttendeeEventsRequestDTO } from '../../../../shared/dtos/attendees/listAttendeeEvents.dto';
import { AttendeeRepo } from '../../repositories/attendee.repository';

@Injectable()
export class ListAttendeeEventsByUserIdService {
  constructor(private attendeeRepository: AttendeeRepo) {}
  async execute(data: ListAttendeeEventsRequestDTO) {
    return await this.attendeeRepository.listAttendeeEventsByStatus(data);
  }
}
