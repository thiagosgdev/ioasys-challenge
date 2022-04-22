import { Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { User } from '../../../../shared/entities/user.entity';

export class FindUserByEmailService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async execute(email: string): Promise<UserDTO> {
    const user = await this.userRepository.findOne({ email });
    if (!user) throw new NotFoundException('User not found!');
    return user;
  }
}
