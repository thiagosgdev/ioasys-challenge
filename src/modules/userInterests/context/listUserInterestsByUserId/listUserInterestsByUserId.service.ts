import { Injectable } from '@nestjs/common';
import { UserInterestRepo } from '../../repositories/userInterests.repository';

@Injectable()
export class ListUserInterestsByUserIdService {
  constructor(private repository: UserInterestRepo) {}
  async execute(userId: string) {
    return await this.repository.listUserInterestsByUserId(userId);
  }
}
