import { Connection } from 'typeorm';

import { Event } from 'src/shared/entities/event.entity';
import { EventAccessibility } from 'src/shared/entities/eventAccessibility.entity';

export const eventsProviders = [
  {
    provide: 'EVENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Event),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'EVENT_ACCESSIBILITY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(EventAccessibility),
    inject: ['DATABASE_CONNECTION'],
  },
];
