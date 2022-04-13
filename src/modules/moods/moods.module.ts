import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Mood } from '../../shared/entities/mood.entity';
import { CreateMoodController } from './context/createMood/createMood.controller';
import { CreateMoodService } from './context/createMood/createMood.service';
import { ListMoodsController } from './context/listMoods/listMoods.controller';
import { ListMoodsService } from './context/listMoods/listMoods.service';
import { moodProviders } from './moods.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Mood])],
  providers: [...moodProviders, CreateMoodService, ListMoodsService],
  controllers: [CreateMoodController, ListMoodsController],
})
export class MoodModule {}
