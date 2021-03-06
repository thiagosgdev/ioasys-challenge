import { Connection } from 'typeorm';

import { Disability } from '../../shared/entities/disability.entity';

export const disabilitiesProviders = [
  {
    provide: 'DISABILITY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Disability),
    inject: ['DATABASE_CONNECTION'],
  },
];
