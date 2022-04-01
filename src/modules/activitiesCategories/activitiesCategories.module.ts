import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';
import { activityCategoriesProviders } from 'src/modules/activitiesCategories/activitiesCategories.provider';
import { CreateActivityCategoryController } from 'src/modules/activitiesCategories/context/createActivityCategory/createActivityCategory.controller';
import { CreateActivityCategoryService } from 'src/modules/activitiesCategories/context/createActivityCategory/createActivityCategory.service';
import { ListActivitiesCategoriesController } from 'src/modules/activitiesCategories/context/listActivitiesCategories/listActivitiesCategories.controller';
import { ListActivitiesCategoriesService } from 'src/modules/activitiesCategories/context/listActivitiesCategories/listActivitiesCategories.service';

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
