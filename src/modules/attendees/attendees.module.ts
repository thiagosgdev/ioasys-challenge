import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Attendee } from 'src/shared/entities/attendees.entity';
import { attendeesProviders } from 'src/modules/attendees/attendees.provider';
import { CreateAttendeeService } from 'src/modules/attendees/context/createAttendee/createAttendee.service';
import { ListAttendeesService } from 'src/modules/attendees/context/listAttendees/listAttendee.service';
import { CreateAttendeeController } from 'src/modules/attendees/context/createAttendee/createAttendee.controller';
import { ListAttendeesController } from 'src/modules/attendees/context/listAttendees/listAttendee.controller';
import { ListAttendeeEventsByUserIdService } from 'src/modules/attendees/context/listAttendeeEventsByUser/listAttendeeEventsByUser.service';
import { ListAttendeeEventsByUserIdController } from 'src/modules/attendees/context/listAttendeeEventsByUser/listAttendeeEventsByUser.controller';
import { AttendeeRepo } from 'src/modules/attendees/repositories/attendee.repository';

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
