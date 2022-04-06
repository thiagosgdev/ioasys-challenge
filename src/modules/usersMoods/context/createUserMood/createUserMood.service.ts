import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { UserMood } from 'src/shared/entities/userMoods.entity';

export class CreateUserMoodService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
  ) {}
  async execute(userId: string, data: CreateUserMoodRequestDTO) {
    const mood = this.userMoodRepository.create({
      userId,
      moodId: data.moodId,
    });
    return await this.userMoodRepository.save(mood);
  }
}
