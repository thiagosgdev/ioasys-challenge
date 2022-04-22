import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { User } from '../../../../shared/entities/user.entity';

export class DeleteUserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async execute(userId: string) {
    await this.userRepository.softDelete(userId);
  }
}
