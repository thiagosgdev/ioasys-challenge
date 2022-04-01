import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Activity } from 'src/shared/entities/activity.entity';
import { activityProviders } from 'src/modules/activities/activities.provider';
import { CreateActivityController } from 'src/modules/activities/context/createActivity/createActivity.controller';
import { CreateActivityService } from 'src/modules/activities/context/createActivity/createActivity.service';
import { ListActivitiesController } from 'src/modules/activities/context/listActivities/listActivities.controller';
import { ListActivitiesService } from 'src/modules/activities/context/listActivities/listActivities.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Activity])],
  providers: [
    ...activityProviders,
    ListActivitiesService,
    CreateActivityService,
  ],
  controllers: [CreateActivityController, ListActivitiesController],
})
export class ActivityModule {}
