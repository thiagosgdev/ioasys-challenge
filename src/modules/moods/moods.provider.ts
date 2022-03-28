import { Mood } from 'src/shared/entities/mood.entity';
import { Connection } from 'typeorm';

export const moodProviders = [
  {
    provide: 'MOOD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Mood),
    inject: ['DATABASE_CONNECTION'],
  },
];
