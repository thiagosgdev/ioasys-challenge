import { AttendeeRepo } from 'src/modules/attendees/repositories/attendee.repository';
import { ListAttendeeEventsRequestDTO } from 'src/shared/dtos/attendees/listAttendeeEvents.dto';

export class ListAttendeeEventsByUserIdService {
  constructor(private attendeeRepository: AttendeeRepo) {}
  async execute(data: ListAttendeeEventsRequestDTO) {
    return await this.attendeeRepository.listAttendeeEventsByStatus(data);
  }
}
