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

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Event])],
  providers: [
    ...eventsProviders,
    EventRepo,
    CreateEventService,
    ListEventsService,
    ListEventsByUserInterestsService,
  ],
  controllers: [
    CreateEventController,
    ListEventsController,
    ListEventsByUserInterestsController,
  ],
})
export class EventModule {}
