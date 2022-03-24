import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { SignUpRequestDTO } from 'src/shared/dtos/users/signUpRequest.dto';
import { User } from 'src/shared/entities/user.entity';
import { Hasher } from 'src/shared/providers/HasherProvider/protocols/hasher';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
  ) {}

  async create(data: SignUpRequestDTO): Promise<User> {
    const { email, password } = data;

    const exists = await this.userRepository.findOne({ email });
    if (exists) {
      throw new BadRequestException(
        'E-mail already in use! Try to recover your password',
      );
    }

    const hashedPassword = await this.hasher.createHash(password);

    const user = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    return user;
  }
}
