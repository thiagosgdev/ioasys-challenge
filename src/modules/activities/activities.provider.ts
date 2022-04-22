import { Connection } from 'typeorm';

import { Activity } from '../../shared/entities/activity.entity';

export const activityProviders = [
  {
    provide: 'ACTIVITY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Activity),
    inject: ['DATABASE_CONNECTION'],
  },
];
