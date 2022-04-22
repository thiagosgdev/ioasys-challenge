import { Connection } from 'typeorm';

import { Address } from '../../shared/entities/address.entity';

export const addressesProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Address),
    inject: ['DATABASE_CONNECTION'],
  },
];
