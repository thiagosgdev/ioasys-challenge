import { Inject } from '@nestjs/common';
import { CreateMoodRequestDTO } from 'src/shared/dtos/moods/createMoodRequest.dto';
import { Mood } from 'src/shared/entities/mood.entity';
import { Repository } from 'typeorm';

export class CreateMoodService {
  constructor(
    @Inject('MOOD_REPOSITORY')
    private moodRepository: Repository<Mood>,
  ) {}
  async execute(data: CreateMoodRequestDTO) {
    const mood = this.moodRepository.create(data);
    await this.moodRepository.save(mood);
    return mood;
  }
}
