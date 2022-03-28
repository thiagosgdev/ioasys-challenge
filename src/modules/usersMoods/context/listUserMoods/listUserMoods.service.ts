import { Inject } from '@nestjs/common';
import { UserMood } from 'src/shared/entities/userMoods.entity';
import { Repository } from 'typeorm';

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
