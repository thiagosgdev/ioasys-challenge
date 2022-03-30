import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserInterest } from 'src/shared/entities/userInterests.entity';

export class ListUserInterestsService {
  constructor(
    @Inject('USER_INTEREST_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(userId: string) {
    return await this.userInterestRepository.find({
      where: {
        id: userId,
      },
      relations: ['activities'],
    });
  }
}
