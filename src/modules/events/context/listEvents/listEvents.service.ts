import { Inject } from '@nestjs/common';
import { Event } from 'src/shared/entities/event.entity';
import { Repository } from 'typeorm';

export class ListEventsService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
  ) {}
  async execute() {
    return await this.eventRepository.find();
  }
}
