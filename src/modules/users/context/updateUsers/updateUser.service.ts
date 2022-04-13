import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UpdateUserDTO } from '../../../../shared/dtos/users/updateUser.dto';
import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { User } from '../../../../shared/entities/user.entity';
import { Hasher } from '../../../../shared/providers/HasherProvider/protocols/hasher';

@Injectable()
export class UpdateUserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
  ) {}

  async update(userId: string, data: UpdateUserDTO): Promise<UserDTO> {
    const userExists = await this.userRepository.findOne({ id: userId });

    if (!userExists) {
      throw new NotFoundException('No user found!');
    }

    if (data.password) {
      const hashedPassword = await this.hasher.createHash(data.password);
      data.password = hashedPassword;
    }

    const updatedUser = {
      ...userExists,
      ...data,
    };

    return await this.userRepository.save(updatedUser);
  }
}
