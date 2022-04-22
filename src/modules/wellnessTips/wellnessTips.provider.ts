import { Connection } from 'typeorm';

import { WellnessTip } from '../../shared/entities/wellnessTips.entity';

export const wellnessTipsProviders = [
  {
    provide: 'WELLNESS_TIP_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(WellnessTip),
    inject: ['DATABASE_CONNECTION'],
  },
];
