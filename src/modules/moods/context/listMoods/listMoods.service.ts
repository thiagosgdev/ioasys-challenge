import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { MoodResponseDTO } from '../../../../shared/dtos/moods/mood.dto';
import { Mood } from '../../../../shared/entities/mood.entity';

export class ListMoodsService {
  constructor(
    @Inject('MOOD_REPOSITORY')
    private moodRepository: Repository<Mood>,
  ) {}
  async execute(): Promise<MoodResponseDTO[]> {
    return await this.moodRepository.find();
  }
}
