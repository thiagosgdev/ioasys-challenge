import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SigninResponseDTO } from '../../../../shared/dtos/users/signinResponse.dto';
import { JwtProvider } from '../../../../shared/providers/EncryptProvider/jwt.provider';
import { mockUser } from '../../../../shared/tests/users.mocks';
import { SigninService } from './signin.service';

const mockSigninResponseDTO = (): SigninResponseDTO => {
  return {
    token: 'any_token',
    refreshToken: 'any_refresh_token',
    user: mockUser,
  };
};

class mockHashProvider {
  compareHash() {
    return false;
  }
}
describe('Sign in Service', () => {
  let service: SigninService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SigninService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => {
              mockSigninResponseDTO();
            }),
          },
        },
        {
          provide: 'USER_REPOSITORY',
          useValue: {
            findOne: jest.fn(() => mockUser),
          },
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

    service = module.get<SigninService>(SigninService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return a token and refresh token on sign in success', async () => {
    jest
      .spyOn(service, 'login')
      .mockReturnValueOnce(Promise.resolve(mockSigninResponseDTO()));
    const response: SigninResponseDTO = await service.login({
      email: 'email@test.com',
      password: '12345',
    });
    expect(response).toEqual(mockSigninResponseDTO());
  });

  it('Should return null on sign in fail', async () => {
    jest.spyOn(service, 'login').mockReturnValueOnce(Promise.resolve(null));
    const response = await service.login({
      email: 'email@test.com',
      password: '12345',
    });
    expect(response).toBeNull();
  });

  it('Should throw not matching password is provided', async () => {
    try {
      await service.login({
        email: 'email@test.com',
        password: '',
      });
    } catch (error) {
      await expect(error).toBeInstanceOf(UnauthorizedException);
    }
  });

  it('Should throw if login() throws', async () => {
    jest
      .spyOn(service, 'login')
      .mockReturnValueOnce(Promise.reject(new Error()));
    const response = service.login({
      email: 'email@test.com',
      password: '12345',
    });
    await expect(response).rejects.toThrow();
  });
});
