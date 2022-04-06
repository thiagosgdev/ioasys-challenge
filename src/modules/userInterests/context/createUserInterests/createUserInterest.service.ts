import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserInterestRequestDTO } from 'src/shared/dtos/userInterest/createUserInterestRequest.dto';
import { UserInterest } from 'src/shared/entities/userInterests.entity';

export class CreateUserInterestService {
  constructor(
    @Inject('USER_INTEREST_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(userId: string, data: CreateUserInterestRequestDTO) {
    const userInterest = {
      userId,
      activityId: '',
    };
    let newUserInterest: UserInterest;
    const activities = data.activityIds;

    await this.userInterestRepository.delete({ userId });

    activities.forEach(async (activity) => {
      userInterest.activityId = activity;
      newUserInterest = this.userInterestRepository.create(userInterest);
      await this.userInterestRepository.save(newUserInterest);
    });
  }
}
