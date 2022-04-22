import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { User } from '../../../../shared/entities/user.entity';

export class ListUsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async execute(): Promise<UserDTO[]> {
    return await this.userRepository.find();
  }
}
