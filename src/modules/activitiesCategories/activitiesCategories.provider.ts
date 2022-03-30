import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';
import { Connection } from 'typeorm';

export const activityCategoriesProviders = [
  {
    provide: 'ACTIVITY_CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(ActivityCategories),
    inject: ['DATABASE_CONNECTION'],
  },
];
