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
import { UpdateAttendeeService } from './context/updateAttendee/updateAttendee.service';
import { UpdateAttendeeController } from './context/updateAttendee/updateAttendee.controller';
import { DeleteAttendeeService } from './context/deleteAttendee/deleteAttendee.service';
import { DeleteAttendeeController } from './context/deleteAttendee/deleteAttendee.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Attendee])],
  providers: [
    ...attendeesProviders,
    AttendeeRepo,
    CreateAttendeeService,
    ListAttendeesService,
    ListAttendeeEventsByUserIdService,
    UpdateAttendeeService,
    DeleteAttendeeService,
  ],
  controllers: [
    CreateAttendeeController,
    ListAttendeesController,
    ListAttendeeEventsByUserIdController,
    UpdateAttendeeController,
    DeleteAttendeeController,
  ],
})
export class AttendeeModule {}
