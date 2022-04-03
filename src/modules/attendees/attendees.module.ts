import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envConfig from 'src/configs/env';

import { DatabaseModule } from 'src/infra/database.module';
import { Attendee } from 'src/shared/entities/attendees.entity';
import { attendeesProviders } from 'src/modules/attendees/attendees.provider';
import { CreateAttendeeService } from './context/createAttendee/createAttendee.service';
import { ListAttendeesService } from './context/listAttendees/listAttendee.service';
import { CreateAttendeeController } from './context/createAttendee/createAttendee.controller';
import { ListAttendeesController } from './context/listAttendees/listAttendee.controller';
import { ListAttendeeEventsByUserIdService } from './context/listAttendeeEventsByUser/listAttendeeEventsByUser.service';
import { ListAttendeeEventsByUserIdController } from './context/listAttendeeEventsByUser/listAttendeeEventsByUser.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Attendee]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: envConfig().jwtSecret,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    ...attendeesProviders,

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
