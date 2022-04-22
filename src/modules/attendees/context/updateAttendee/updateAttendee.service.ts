import { Repository } from 'typeorm';
import { ForbiddenException, Inject, NotFoundException } from '@nestjs/common';

import { AttendeeRequestDTO } from '../../../../shared/dtos/attendees/attendeeRequest.dto';
import { Attendee } from '../../../../shared/entities/attendees.entity';
import { Event } from '../../../../shared/entities/event.entity';

export class UpdateAttendeeService {
  constructor(
    @Inject('ATTENDEE_REPOSITORY')
    private attendeeRepository: Repository<Attendee>,
    @Inject('EVENT_REPOSITORY')
    private eventsRepository: Repository<Event>,
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

    const numParticipants = await this.attendeeRepository.count({
      where: { eventId, status: 'CONFIRMED' },
    });

    const event = await this.eventsRepository.findOne(eventId);

    if (numParticipants === event.maxParticipants)
      throw new ForbiddenException(
        'This event has reached its maximum capacity!',
      );

    attendeeExists.status = status;

    return await this.attendeeRepository.save(attendeeExists);
  }
}
