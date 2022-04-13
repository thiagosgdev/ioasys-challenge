import { Connection } from 'typeorm';

import { UserInterest } from '../../shared/entities/userInterests.entity';

export const userInterestsProviders = [
  {
    provide: 'USER_INTEREST_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserInterest),
    inject: ['DATABASE_CONNECTION'],
  },
];
