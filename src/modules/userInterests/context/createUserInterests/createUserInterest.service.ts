import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserInterestRequestDTO } from '../../../../shared/dtos/userInterest/userInterestRequest.dto';
import { UserInterest } from '../../../../shared/entities/userInterests.entity';

export class CreateUserInterestService {
  constructor(
    @Inject('USER_INTEREST_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(userId: string, data: UserInterestRequestDTO) {
    const newUserInterest = [];

    await this.userInterestRepository.delete({ userId });

    data.activityIds.forEach(async (activity) => {
      newUserInterest.push({ userId, activityId: activity });
    });
    return await this.userInterestRepository.save(newUserInterest);
  }
}
