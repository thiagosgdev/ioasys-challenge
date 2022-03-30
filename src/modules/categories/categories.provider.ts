import { Category } from 'src/shared/entities/category.entity';
import { Connection } from 'typeorm';

export const categoriesProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];
