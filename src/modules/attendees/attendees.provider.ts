import { Connection } from 'typeorm';

import { Attendee } from 'src/shared/entities/attendees.entity';

export const attendeesProviders = [
  {
    provide: 'ATTENDEE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Attendee),
    inject: ['DATABASE_CONNECTION'],
  },
];
