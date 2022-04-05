import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserInterest } from 'src/shared/entities/userInterests.entity';

export class ListUserDisabilitiesByUserIdService {
  constructor(
    @Inject('USER_DISABILITY_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(userId: string) {
    return await this.userInterestRepository.query(
      `SELECT di.*
    FROM
        users_disabilities ud
        INNER JOIN disabilities di ON ud.disability_id = di.id
        INNER JOIN users us ON ud.user_id = us.id
    WHERE
        ud.user_id = $1 AND
        di.active = true`,
      [userId],
    );
  }
}
