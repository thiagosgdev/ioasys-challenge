import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Event } from 'src/shared/entities/event.entity';
import { eventsProviders } from 'src/modules/events/events.provider';
import { CreateEventService } from 'src/modules/events/context/createEvent/createEvent.service';
import { ListEventsService } from 'src/modules/events/context/listEvents/listEvents.service';
import { CreateEventController } from 'src/modules/events/context/createEvent/createEvent.controller';
import { ListEventsController } from 'src/modules/events/context/listEvents/listEvents.controller';
import { ListEventsByUserInterestsController } from 'src/modules/events/context/listEventsByUserInterests/listEventsByUserInterests.controller';
import { ListEventsByUserInterestsService } from 'src/modules/events/context/listEventsByUserInterests/listEventsByUserInterests.service';
import { EventRepo } from 'src/modules/events/repositories/events.repository';
import { UpdateEventService } from 'src/modules/events/context/updateEvent/updateEvent.service';
import { UpdateEventController } from 'src/modules/events/context/updateEvent/updateEvent.controller';
import { addressesProviders } from 'src/modules/addresses/address.provider';
import { attendeesProviders } from '../attendees/attendees.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Event])],
  providers: [
    ...eventsProviders,
    ...addressesProviders,
    ...attendeesProviders,
    EventRepo,
    CreateEventService,
    ListEventsService,
    ListEventsByUserInterestsService,
    UpdateEventService,
  ],
  controllers: [
    CreateEventController,
    ListEventsController,
    ListEventsByUserInterestsController,
    UpdateEventController,
  ],
})
export class EventModule {}
