import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateMoodRequestDTO } from '../../../../shared/dtos/moods/createMoodRequest.dto';
import { Mood } from '../../../../shared/entities/mood.entity';

export class CreateMoodService {
  constructor(
    @Inject('MOOD_REPOSITORY')
    private moodRepository: Repository<Mood>,
  ) {}
  async execute(data: CreateMoodRequestDTO) {
    const mood = this.moodRepository.create(data);
    return await this.moodRepository.save(mood);
  }
}
