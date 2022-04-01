import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Category } from 'src/shared/entities/category.entity';
import { categoriesProviders } from 'src/modules/categories/categories.provider';
import { CreateCategoryService } from 'src/modules/categories/context/createCategory/createCategory.service';
import { ListCategoriesService } from 'src/modules/categories/context/listCategories/listCategories.service';
import { CreateCategoryController } from 'src/modules/categories/context/createCategory/createCategory.controller';
import { ListCategoriesController } from 'src/modules/categories/context/listCategories/listCategories.controller';

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
