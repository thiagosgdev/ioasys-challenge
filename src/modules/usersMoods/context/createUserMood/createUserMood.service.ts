import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserMoodRequestDTO } from '../../../../shared/dtos/userMood/createUserMoodRequest.dto';
import { UserMood } from '../../../../shared/entities/userMoods.entity';

export class CreateUserMoodService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
  ) {}
  async execute(userId: string, data: CreateUserMoodRequestDTO) {
    return await this.userMoodRepository.save({
      userId,
      moodId: data.moodId,
    });
  }
}
