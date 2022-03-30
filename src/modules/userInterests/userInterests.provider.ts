import { UserInterest } from 'src/shared/entities/userInterests.entity';
import { Connection } from 'typeorm';

export const userInterestsProviders = [
  {
    provide: 'USER_INTEREST_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserInterest),
    inject: ['DATABASE_CONNECTION'],
  },
];
