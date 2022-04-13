import { Connection } from 'typeorm';

import { Category } from '../../shared/entities/category.entity';

export const categoriesProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];
