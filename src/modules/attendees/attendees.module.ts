import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Attendee } from '../../shared/entities/attendees.entity';
import { attendeesProviders } from './attendees.provider';
import { CreateAttendeeService } from './context/createAttendee/createAttendee.service';
import { ListAttendeesService } from './context/listAttendees/listAttendee.service';
import { CreateAttendeeController } from './context/createAttendee/createAttendee.controller';
import { ListAttendeesController } from './context/listAttendees/listAttendee.controller';
import { ListAttendeeEventsByUserIdService } from './context/listAttendeeEventsByUser/listAttendeeEventsByUser.service';
import { ListAttendeeEventsByUserIdController } from './context/listAttendeeEventsByUser/listAttendeeEventsByUser.controller';
import { AttendeeRepo } from './repositories/attendee.repository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Attendee])],
  providers: [
    ...attendeesProviders,
    AttendeeRepo,
    CreateAttendeeService,
    ListAttendeesService,
    ListAttendeeEventsByUserIdService,
  ],
  controllers: [
    CreateAttendeeController,
    ListAttendeesController,
    ListAttendeeEventsByUserIdController,
  ],
})
export class AttendeeModule {}
