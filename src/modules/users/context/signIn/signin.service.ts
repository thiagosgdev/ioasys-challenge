import {
  Inject,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

import { SignIn } from 'src/domain/usecase/users/sigin.usecase';
import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninResponseDTO } from 'src/shared/dtos/users/signinResponse.dto';
import { User } from 'src/shared/entities/user.entity';
import { Hasher } from 'src/shared/providers/HasherProvider/protocols/hasher';
import envConfig from 'src/configs/env';

export class SigninService implements SignIn {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
    private jwtService: JwtService,
  ) {}
  async login(data: SigninRequestDTO): Promise<SigninResponseDTO> {
    const { email, password } = data;
    let role = 'user';

    const userCredentials = await this.userRepository.findOne({
      select: ['email', 'password'],
      where: {
        email,
      },
    });

    if (!userCredentials) {
      throw new NotFoundException('No user found!');
    }

    const isValid = await this.hasher.compareHash(
      password,
      userCredentials.password,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid email/password');
    }

    const user = await this.userRepository.findOne({
      email,
    });

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
