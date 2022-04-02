import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserInterest } from 'src/shared/entities/userInterests.entity';

export class ListUserInterestsByUserIdService {
  constructor(
    @Inject('USER_INTEREST_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(userId: string) {
    return await this.userInterestRepository
      .createQueryBuilder('users_interests')
      .where({ userId })
      .select([
        'users_interests.userId',
        'users_interests.createdAt',
        'activities.id',
        'activities.name',
        'users.FirstName',
      ])
      .leftJoin('users_interests.activities', 'activities')
      .leftJoin('users_interests.users', 'users')
      .getMany();
  }
}
