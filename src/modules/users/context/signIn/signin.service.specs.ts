import { Test, TestingModule } from '@nestjs/testing';
import { SigninResponseDTO } from 'src/shared/dtos/users/signinResponse.dto';
import { SigninService } from 'src/modules/users/context/signIn/signin.service';
import { BcryptProvider } from 'src/shared/providers/HasherProvider/bcrypt.provider';
import { JwtProvider } from 'src/shared/providers/EncryptProvider/jwt.provider';
import { UserDTO } from 'src/shared/dtos/users/user.dto';

const mockUser: UserDTO = {
  id: 'any_id',
  firstName: 'Test',
  lastName: 'Tester',
  email: 'test@test.com',
  password: null,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};
const mockSigninResponseDTO = (): SigninResponseDTO => {
  return {
    token: 'any_token',
    refreshToken: 'any_refresh_token',
    user: mockUser,
  };
};
describe('Sign in Service', () => {
  let service: SigninService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SigninService,
        {
          provide: 'USER_REPOSITORY',
          useValue: {
            findOne: jest.fn(() => mockUser),
          },
        },
        {
          provide: 'HASH_PROVIDER',
          useClass: BcryptProvider,
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

  it('Should return throw if no password or email is provided', async () => {
    try {
      await service.login({
        email: 'email@test.com',
        password: '',
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
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
