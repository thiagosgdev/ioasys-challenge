import { Connection } from 'typeorm';

import { UserDisability } from 'src/shared/entities/userDisability.entity';

export const userDisabilitiesProviders = [
  {
    provide: 'USER_DISABILITY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserDisability),
    inject: ['DATABASE_CONNECTION'],
  },
];
