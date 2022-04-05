import { Injectable } from '@nestjs/common';
import { UserDisabilityRepo } from 'src/modules/usersDisabilities/repositories/userDisabilitily.repository';

@Injectable()
export class ListUserDisabilitiesByUserIdService {
  constructor(private repository: UserDisabilityRepo) {}
  async execute(userId: string) {
    return await this.repository.listUserDisabilitiesByUserId(userId);
  }
}
