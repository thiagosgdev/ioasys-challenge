import { Activity } from 'src/shared/entities/activity.entity';
import { Connection } from 'typeorm';

export const activityProviders = [
  {
    provide: 'ACTIVITY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Activity),
    inject: ['DATABASE_CONNECTION'],
  },
];
