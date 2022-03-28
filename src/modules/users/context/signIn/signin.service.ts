import { BadRequestException, Inject } from '@nestjs/common';
import { SignIn } from 'src/domain/usecase/users/sigin.usecase';
import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninResponseDTO } from 'src/shared/dtos/users/signinResponse.dto';
import { User } from 'src/shared/entities/user.entity';
import { Encrypter } from 'src/shared/providers/EncryptProvider/protocols/encrypter';
import { EncrypterRefresh } from 'src/shared/providers/EncryptProvider/protocols/encrypterExpirationDate';
import { Hasher } from 'src/shared/providers/HasherProvider/protocols/hasher';
import { Repository } from 'typeorm';

export class SigninService implements SignIn {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
    @Inject('ENCRYPTER_PROVIDER')
    private encrypter: Encrypter,
    @Inject('ENCRYPTER_PROVIDER')
    private encrypterRefresh: EncrypterRefresh,
  ) {}
  async login(data: SigninRequestDTO): Promise<SigninResponseDTO> {
    const { email, password } = data;
    if (!email || !password) {
      throw new BadRequestException('Required field not provided!');
    }
    const userCredentials = await this.userRepository.findOne({
      select: ['email', 'password'],
      where: {
        email,
      },
    });

    if (!userCredentials) {
      userCredentials.password = String(Math.random() * 1000) + 'F4!L';
    }
    const isValid = await this.hasher.compareHash(
      password,
      userCredentials.password,
    );

    if (!isValid) {
      throw new BadRequestException('Invalid email/password');
    }

    const user = await this.userRepository.findOne({
      email,
    });
    const token = await this.encrypter.encrypt(user.id);
    const refreshToken = await this.encrypterRefresh.encryptRefresh(user.id);

    return { token, refreshToken, user };
  }
}
