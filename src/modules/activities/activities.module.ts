import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Activity } from 'src/shared/entities/activity.entity';
import { activityProviders } from './activities.provider';
import { CreateActivityController } from './context/createActivity/createActivity.controller';
import { CreateActivityService } from './context/createActivity/createActivity.service';
import { ListActivitiesController } from './context/listActivities/listActivities.controller';
import { ListActivitiesService } from './context/listActivities/listActivities.service';

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
