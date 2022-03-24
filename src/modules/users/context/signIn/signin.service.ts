import { BadRequestException, Inject } from '@nestjs/common';
import { SignIn } from 'src/domain/usecase/users/sigin.usecase';
import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninResponseDTO } from 'src/shared/dtos/users/signinResponse.dto';
import { UserEntityDTO } from 'src/shared/dtos/users/userEntity.dto';
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
    const userExists = await this.userRepository.findOne({ email });

    if (!userExists) {
      userExists.password = String(Math.random() * 1000) + 'F4!L';
    }

    const isValid = await this.hasher.compareHash(
      password,
      userExists.password,
    );

    if (!isValid) {
      throw new BadRequestException('Invalid email/password');
    }

    const token = await this.encrypter.encrypt(userExists.id);
    const refreshToken = await this.encrypterRefresh.encryptRefresh(
      userExists.id,
    );

    const user: UserEntityDTO = {
      firstName: userExists.first_name,
      lastName: userExists.last_name,
      email: userExists.email,
      created_at: userExists.created_at,
      updated_at: userExists.updated_at,
      deleted_at: userExists.deleted_at,
    };

    return { token, refreshToken, user };
  }
}
