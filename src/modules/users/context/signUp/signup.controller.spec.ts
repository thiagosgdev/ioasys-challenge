import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';

import {
  mockSignUpRequestDTO,
  mockUser,
} from '../../../../shared/tests/users.mocks';
import { SignUpController } from './signUp.controller';
import { SignUpService } from './signUp.service';
import {
  BadRequestException,
  ConflictException,
  HttpException,
} from '@nestjs/common';

const mockSignupService = {
  execute: jest.fn((dto) => {
    return {
      token: 'any_token',
      refresh_token: 'any_refresh_token',
      user: mockUser,
    };
  }),
};

describe('SignUp Controller', () => {
  let controller: SignUpController;
  let service: SignUpService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignUpController],
      providers: [SignUpService],
    })
      .overrideProvider(SignUpService)
      .useValue(mockSignupService)
      .compile();

    controller = module.get<SignUpController>(SignUpController);
    service = module.get<SignUpService>(SignUpService);
  });
  it('Should call SignupService with the correct values', async () => {
    const loginSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockSignUpRequestDTO());
    expect(loginSpy).toHaveBeenCalledWith(mockSignUpRequestDTO());
  });

  it('Should return the tokens and user on SignupService success', async () => {
    const response = await controller.handle(mockSignUpRequestDTO());
    expect(response).toEqual({
      token: 'any_token',
      refresh_token: 'any_refresh_token',
      user: mockUser,
    });
  });

  it('Should throw if SignupService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockReturnValueOnce(Promise.reject(new ConflictException()));
    const error = controller.handle(mockSignUpRequestDTO());
    await expect(error).rejects.toBeInstanceOf(HttpException);
  });
});
