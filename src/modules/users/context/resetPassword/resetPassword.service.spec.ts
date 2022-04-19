import { MailerService } from '@nestjs-modules/mailer';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { mockUser } from '../../../../shared/tests/users.mock';
import { ResetPasswordService } from './resetPassword.service';

const mockUserRepository = {
  findOne: (): Promise<UserDTO | null> => {
    return Promise.resolve(mockUser);
  },
  save: () => {
    return Promise.resolve(mockUser);
  },
};

const mockHashProvider = {
  compareHash: jest.fn(() => {
    Promise.resolve(false);
  }),
  createHash: jest.fn(() => {
    return Promise.resolve('any_hashed');
  }),
};

const mockMailerService = {
  sendMail: jest.fn(async () => {
    return Promise.resolve(true);
  }),
};

describe('Reset Password Service', () => {
  let service: ResetPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResetPasswordService,
        {
          provide: 'USER_REPOSITORY',
          useValue: mockUserRepository,
        },
        {
          provide: 'HASH_PROVIDER',
          useValue: mockHashProvider,
        },
        {
          provide: MailerService,
          useValue: mockMailerService,
        },
      ],
    }).compile();

    service = module.get<ResetPasswordService>(ResetPasswordService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('Should call the repository save() with the updated user password', async () => {
    const executeSpy = jest.spyOn(mockUserRepository, 'save');
    await service.execute('test@test.com');
    expect(executeSpy).toHaveBeenCalledWith({
      ...mockUser,
      password: 'any_hashed',
    });
  });

  it('Should throw a NotFoundException if findOne() return null', async () => {
    jest
      .spyOn(mockUserRepository, 'findOne')
      .mockReturnValueOnce(Promise.resolve(null));
    const response = service.execute('test@test.com');
    await expect(response).rejects.toBeInstanceOf(NotFoundException);
  });
});
