import { Injectable, Inject } from '@nestjs/common';
import { UpdateUserDTO } from 'src/shared/dtos/users/updateUser.dto';
import { UserDTO } from 'src/shared/dtos/users/user.dto';
import { User } from 'src/shared/entities/user.entity';
import { Hasher } from 'src/shared/providers/HasherProvider/protocols/hasher';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateUserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
  ) {}

  async update(data: UpdateUserDTO): Promise<UserDTO> {
    if (data.password) {
      const hashedPassword = await this.hasher.createHash(data.password);
      data.password = hashedPassword;
    }

    const userExists = await this.userRepository.findOne({ email: data.email });

    const updatedUser = {
      ...userExists,
      ...data,
    };

    await this.userRepository.save(updatedUser);

    return updatedUser;
  }
}
