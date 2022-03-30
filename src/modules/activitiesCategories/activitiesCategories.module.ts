import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';
import { activityCategoriesProviders } from './activitiesCategories.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([ActivityCategories])],
  providers: [...activityCategoriesProviders],
  controllers: [],
})
export class ActivityCategoriesModule {}
