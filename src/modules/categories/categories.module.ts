import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Category } from 'src/shared/entities/category.entity';
import { categoriesProviders } from 'src/modules/categories/categories.provider';
import { CreateCategoryService } from './context/createCategory/createCategory.service';
import { ListCategoriesService } from './context/listCategories/listActivitiesCategories.service';
import { CreateCategoryController } from './context/createCategory/createCategory.controller';
import { ListCategoriesController } from './context/listCategories/listActivitiesCategories.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Category])],
  providers: [
    ...categoriesProviders,
    CreateCategoryService,
    ListCategoriesService,
  ],
  controllers: [CreateCategoryController, ListCategoriesController],
})
export class CategoriesModule {}
