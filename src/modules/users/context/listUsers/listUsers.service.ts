import { Inject } from '@nestjs/common';
import { UserDTO } from 'src/shared/dtos/users/user.dto';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';

export class ListUsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async execute(): Promise<UserDTO[]> {
    return await this.userRepository.find();
  }
}
