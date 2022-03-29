import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';

import { SigninService } from './signin.service';
import { SigninController } from './signin.controller';
import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { BadRequestException, HttpException } from '@nestjs/common';
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

const mockSigninRequest = (): SigninRequestDTO => {
  return {
    email: 'any_email@test.com',
    password: 'any_password',
  };
};
const mockSigninService = {
  login: jest.fn((dto) => {
    return {
      token: 'any_token',
      refresh_token: 'any_refresh_token',
      user: mockUser,
    };
  }),
};

describe('Signin Controller', () => {
  let controller: SigninController;
  let service: SigninService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SigninController],
      providers: [SigninService],
    })
      .overrideProvider(SigninService)
      .useValue(mockSigninService)
      .compile();

    controller = module.get<SigninController>(SigninController);
    service = module.get<SigninService>(SigninService);
  });
  it('Should call SigninService with the correct values', async () => {
    const loginSpy = jest.spyOn(service, 'login');
    await controller.handle(mockSigninRequest());
    expect(loginSpy).toHaveBeenCalledWith(mockSigninRequest());
  });

  it('Should return the tokens on SigninService success', async () => {
    const response = await controller.handle(mockSigninRequest());
    expect(response).toEqual({
      token: 'any_token',
      refresh_token: 'any_refresh_token',
      user: mockUser,
    });
  });

  it('Should throw if SigninService throws', async () => {
    jest
      .spyOn(service, 'login')
      .mockReturnValueOnce(
        Promise.reject(
          new BadRequestException('Email and/or password are required'),
        ),
      );
    const response = controller.handle({
      email: 'test@test.com',
      password: '',
    });
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
