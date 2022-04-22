import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Disability } from '../../../shared/entities/disability.entity';
import { UserDisability } from '../../../shared/entities/userDisability.entity';

@Injectable()
export class UserDisabilityRepo {
  constructor(
    @InjectRepository(UserDisability)
    private readonly repository: Repository<UserDisability>,
  ) {}
  async listUserDisabilitiesByUserId(userId: string): Promise<Disability[]> {
    return await this.repository.query(
      `SELECT di.*
      FROM
          users_disabilities ud
          INNER JOIN disabilities di ON ud.disability_id = di.id
          INNER JOIN users us ON ud.user_id = us.id
      WHERE
          ud.user_id = $1 AND
          di.active = true AND
          ud.deleted_at IS NULL`,
      [userId],
    );
  }
}
