import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import MockDate from 'mockdate';

import { JwtProvider } from '../../../../shared/providers/EncryptProvider/jwt.provider';
import { SignUpService } from './signUp.service';
import {
  mockSignUpRequestDTO,
  mockUser,
} from '../../../../shared/tests/users.mocks';
import { BadRequestException, ConflictException } from '@nestjs/common';

const mockUserLogedResponse = {
  token: 'any_token',
  refresh_token: 'any_refresh_token',
  user: mockUser,
};

class mockUserRepository {
  findOne() {
    return null;
  }
  create() {
    return mockUserLogedResponse;
  }
  save() {
    return null;
  }
}

class mockHashProvider {
  compareHash() {
    return false;
  }
  createHash() {
    return 'any_hashed';
  }
}
describe('Sign up Service', () => {
  let service: SignUpService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignUpService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => {
              null;
            }),
          },
        },
        {
          provide: 'USER_REPOSITORY',
          useClass: mockUserRepository,
        },
        {
          provide: 'HASH_PROVIDER',
          useClass: mockHashProvider,
        },
        {
          provide: 'ENCRYPTER_PROVIDER',
          useClass: JwtProvider,
        },
      ],
    }).compile();

    service = module.get<SignUpService>(SignUpService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the user and tokens created on SignUp success', async () => {
    const response = await service.execute(mockSignUpRequestDTO());
    expect(response).toHaveProperty('user');
  });

  it('Should return a ConflicException if the e-mail already exists', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new ConflictException());
    const response = service.execute(mockSignUpRequestDTO());
    await expect(response).rejects.toBeInstanceOf(ConflictException);
  });

  it('Should return a BadRequestException if the password does not match', async () => {
    const response = service.execute({
      name: 'any_name',
      email: 'any_email@test.com',
      password: 'any_password',
      passwordConfirmation: 'wrong',
    });
    await expect(response).rejects.toBeInstanceOf(BadRequestException);
  });
});
