import { Connection } from 'typeorm';

import { MoodActivity } from '../../shared/entities/moodsActivities.entity';

export const moodsActivitiesProviders = [
  {
    provide: 'MOOD_ACTIVITY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(MoodActivity),
    inject: ['DATABASE_CONNECTION'],
  },
];
