import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserInterest } from '../../../shared/entities/userInterests.entity';
import { Activity } from '../../../shared/entities/activity.entity';

@Injectable()
export class UserInterestRepo {
  constructor(
    @InjectRepository(UserInterest)
    private readonly repository: Repository<UserInterest>,
  ) {}
  async listUserInterestsByUserId(userId: string): Promise<Activity[]> {
    return await this.repository.query(
      `
          SELECT ac.* FROM users_interests ui 
          INNER JOIN users u ON ui.user_id = u.id
          INNER JOIN activities ac ON ui.activity_id = ac.id
          WHERE ui.user_id = $1 AND
          ac.active = true AND
          ui.deleted_at IS NULL;
      `,
      [userId],
    );
  }
}
