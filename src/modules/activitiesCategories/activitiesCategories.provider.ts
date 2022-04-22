import { Connection } from 'typeorm';

import { ActivityCategories } from '../../shared/entities/activityCategories.entity';

export const activityCategoriesProviders = [
  {
    provide: 'ACTIVITY_CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(ActivityCategories),
    inject: ['DATABASE_CONNECTION'],
  },
];
