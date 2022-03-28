import { UserMood } from 'src/shared/entities/userMoods.entity';
import { Connection } from 'typeorm';

export const userMoodProviders = [
  {
    provide: 'USER_MOOD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(UserMood),
    inject: ['DATABASE_CONNECTION'],
  },
];
