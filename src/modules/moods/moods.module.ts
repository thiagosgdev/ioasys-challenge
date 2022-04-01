import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Mood } from 'src/shared/entities/mood.entity';
import { CreateMoodController } from 'src/modules/moods/context/createMood/createMood.controller';
import { CreateMoodService } from 'src/modules/moods/context/createMood/createMood.service';
import { ListMoodsController } from 'src/modules/moods/context/listMoods/listMoods.controller';
import { ListMoodsService } from 'src/modules/moods/context/listMoods/listMoods.service';
import { moodProviders } from 'src/modules/moods/moods.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Mood])],
  providers: [...moodProviders, CreateMoodService, ListMoodsService],
  controllers: [CreateMoodController, ListMoodsController],
})
export class MoodModule {}
