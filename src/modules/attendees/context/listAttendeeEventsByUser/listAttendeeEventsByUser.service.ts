import { Injectable } from '@nestjs/common';
import { ListAttendeeEventsRequestDTO } from '../../../../shared/dtos/attendees/listAttendeeEvents.dto';
import { AttendeeRepo } from '../../repositories/attendee.repository';

@Injectable()
export class ListAttendeeEventsByUserIdService {
  constructor(private attendeeRepository: AttendeeRepo) {}
  async execute(data: ListAttendeeEventsRequestDTO) {
    const userId = data.userId;
    const status = String(data.status).toUpperCase();
    return await this.attendeeRepository.listAttendeeEventsByStatus(
      userId,
      status,
    );
  }
}
