import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { ActivityCategories } from '../../shared/entities/activityCategories.entity';
import { CreateActivityCategoryService } from './context/createActivityCategory/createActivityCategory.service';
import { CreateActivityCategoryController } from './context/createActivityCategory/createActivityCategory.controller';
import { ListActivitiesCategoriesController } from './context/listActivitiesCategories/listActivitiesCategories.controller';
import { ListActivitiesCategoriesService } from './context/listActivitiesCategories/listActivitiesCategories.service';
import { activityCategoriesProviders } from './activitiesCategories.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([ActivityCategories])],
  providers: [
    ...activityCategoriesProviders,
    CreateActivityCategoryService,
    ListActivitiesCategoriesService,
  ],
  controllers: [
    CreateActivityCategoryController,
    ListActivitiesCategoriesController,
  ],
})
export class ActivityCategoriesModule {}
