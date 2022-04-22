import {
  Injectable,
  Inject,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

import { SignUpRequestDTO } from '../../../../shared/dtos/users/signUpRequest.dto';
import { User } from '../../../../shared/entities/user.entity';
import { Hasher } from '../../../../shared/providers/HasherProvider/protocols/hasher';
import envConfig from '../../../../configs/env';

@Injectable()
export class SignUpService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
    private jwtService: JwtService,
  ) {}

  async execute(data: SignUpRequestDTO) {
    const { email, password, passwordConfirmation } = data;
    let role = '';

    if (password !== passwordConfirmation) {
      throw new BadRequestException('Password not match! Try again.');
    }

    const exists = await this.userRepository.findOne({ email });
    if (exists) {
      throw new ConflictException(
        'E-mail already in use! Try to recover your password',
      );
    }

    const hashedPassword = await this.hasher.createHash(password);

    const user = await this.userRepository.save({
      ...data,
      password: hashedPassword,
    });

    if (user.isPremium) role = 'premium';
    if (user.isAdmin) role = 'admin';

    const token = this.jwtService.sign(
      { userId: user.id, role },
      { expiresIn: envConfig().jwtExpires },
    );

    const refreshToken = this.jwtService.sign(
      { userId: user.id, role },
      { expiresIn: envConfig().jwtRefExpires },
    );

    return { token, refreshToken, user };
  }
}
