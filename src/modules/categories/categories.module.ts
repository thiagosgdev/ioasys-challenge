import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Category } from '../../shared/entities/category.entity';
import { categoriesProviders } from './categories.provider';
import { CreateCategoryService } from './context/createCategory/createCategory.service';
import { ListCategoriesService } from './context/listCategories/listCategories.service';
import { CreateCategoryController } from './context/createCategory/createCategory.controller';
import { ListCategoriesController } from './context/listCategories/listCategories.controller';

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
