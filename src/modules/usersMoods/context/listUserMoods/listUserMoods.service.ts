import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserMood } from '../../../../shared/entities/userMoods.entity';

export class ListUserMoodsService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
  ) {}
  async execute(userId: string) {
    return await this.userMoodRepository.find({
      where: {
        userId,
      },
      relations: ['mood'],
    });
  }
}
