import { Inject } from '@nestjs/common';
import { MoodResponse } from 'src/shared/dtos/moods/mood.dto';
import { Mood } from 'src/shared/entities/mood.entity';
import { Repository } from 'typeorm';

export class ListMoodsService {
  constructor(
    @Inject('MOOD_REPOSITORY')
    private moodRepository: Repository<Mood>,
  ) {}
  async execute(): Promise<MoodResponse[]> {
    return await this.moodRepository.find();
  }
}
