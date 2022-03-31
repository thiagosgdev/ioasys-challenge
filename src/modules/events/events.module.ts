import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Event } from 'src/shared/entities/event.entity';
import { eventsProviders } from 'src/modules/events/events.provider';
import { CreateEventService } from 'src/modules/events/context/createEvent/createEvent.service';
import { ListEventsService } from 'src/modules/events/context/listEvents/listEvents.service';
import { CreateEventController } from 'src/modules/events/context/createEvent/createEvent.controller';
import { ListEventsController } from 'src/modules/events/context/listEvents/listEvents.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Event])],
  providers: [...eventsProviders, CreateEventService, ListEventsService],
  controllers: [CreateEventController, ListEventsController],
})
export class EventModule {}
