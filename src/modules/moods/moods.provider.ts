import { Connection } from 'typeorm';

import { Mood } from '../../shared/entities/mood.entity';

export const moodProviders = [
  {
    provide: 'MOOD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Mood),
    inject: ['DATABASE_CONNECTION'],
  },
];
