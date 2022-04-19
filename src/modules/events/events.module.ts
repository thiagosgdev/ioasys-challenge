import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Event } from '../../shared/entities/event.entity';
import { attendeesProviders } from '../attendees/attendees.provider';
import { addressesProviders } from '../addresses/address.provider';
import { userMoodProviders } from '../usersMoods/userMoods.provider';
import { eventsProviders } from './events.provider';
import { CreateEventService } from './context/createEvent/createEvent.service';
import { ListEventsService } from './context/listEvents/listEvents.service';
import { CreateEventController } from './context/createEvent/createEvent.controller';
import { ListEventsController } from './context/listEvents/listEvents.controller';
import { ListEventsByUserInterestsController } from './context/listEventsByUserInterests/listEventsByUserInterests.controller';
import { ListEventsByUserInterestsService } from './context/listEventsByUserInterests/listEventsByUserInterests.service';
import { EventRepo } from './repositories/events.repository';
import { UpdateEventService } from './context/updateEvent/updateEvent.service';
import { UpdateEventController } from './context/updateEvent/updateEvent.controller';
import { DeleteEventService } from './context/deleteEvent/deleteEvent.service';
import { DeleteEventController } from './context/deleteEvent/deleteEvent.controller';
import { moodsActivitiesProviders } from '../moodsActivities/moodsActivities.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Event])],
  providers: [
    ...eventsProviders,
    ...addressesProviders,
    ...attendeesProviders,
    ...userMoodProviders,
    ...moodsActivitiesProviders,
    EventRepo,
    CreateEventService,
    ListEventsService,
    ListEventsByUserInterestsService,
    UpdateEventService,
    DeleteEventService,
  ],
  controllers: [
    CreateEventController,
    ListEventsController,
    ListEventsByUserInterestsController,
    UpdateEventController,
    DeleteEventController,
  ],
})
export class EventModule {}
