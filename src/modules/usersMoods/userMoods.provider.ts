import { Connection } from 'typeorm';

import { UserMood } from '../../shared/entities/userMoods.entity';

export const userMoodProviders = [
  {
    provide: 'USER_MOOD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(UserMood),
    inject: ['DATABASE_CONNECTION'],
  },
];
