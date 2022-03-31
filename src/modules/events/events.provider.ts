import { Connection } from 'typeorm';

import { Event } from 'src/shared/entities/event.entity';

export const eventsProviders = [
  {
    provide: 'EVENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Event),
    inject: ['DATABASE_CONNECTION'],
  },
];
