import { Repository } from 'typeorm';
import { ConflictException, ForbiddenException, Inject } from '@nestjs/common';

import { AttendeeRequestDTO } from '../../../../shared/dtos/attendees/attendeeRequest.dto';
import { Attendee } from '../../../../shared/entities/attendees.entity';
import { Event } from '../../../../shared/entities/event.entity';

export class CreateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
    @Inject('EVENT_REPOSITORY')
    private eventsRepository: Repository<Event>,
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

    const numParticipants = await this.attendeeRepository.count({
      where: { eventId, status: 'CONFIRMED' },
    });

    const event = await this.eventsRepository.findOne(eventId);

    if (numParticipants === event.maxParticipants)
      throw new ForbiddenException(
        'This event has reached its maximum capacity!',
      );

    return await this.attendeeRepository.save({
      userId,
      eventId,
      status,
    });
  }
}
