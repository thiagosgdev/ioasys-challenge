import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MoodActivity } from '../../shared/entities/moodsActivities.entity';
import { DatabaseModule } from '../../infra/database.module';
import { moodsActivitiesProviders } from './moodsActivities.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([MoodActivity])],
  providers: [...moodsActivitiesProviders],
  controllers: [],
})
export class MoodsActivitiesModule {}
