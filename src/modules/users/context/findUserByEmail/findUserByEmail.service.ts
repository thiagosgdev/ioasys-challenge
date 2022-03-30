import { Inject, NotFoundException } from '@nestjs/common';
import { UserDTO } from 'src/shared/dtos/users/user.dto';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';

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
