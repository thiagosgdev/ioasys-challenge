import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { mockUser } from '../../../../shared/tests/users.mock';
import { FindUserByEmailService } from './findUserByEmail.service';

const mockUserRepository = {
  findOne: (): Promise<UserDTO | null> => {
    return Promise.resolve(mockUser);
  },
};

describe('Find User by Email Service', () => {
  let service: FindUserByEmailService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindUserByEmailService,
        {
          provide: 'USER_REPOSITORY',
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<FindUserByEmailService>(FindUserByEmailService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('Should return the user on findOne() success', async () => {
    const response = await service.execute('any_email@test.com');
    expect(response).toEqual(mockUser);
  });

  it('Should throw NotFoundException if no user is found', async () => {
    jest
      .spyOn(mockUserRepository, 'findOne')
      .mockReturnValueOnce(Promise.resolve(null));
    const response = service.execute('any_email@test.com');
    await expect(response).rejects.toBeInstanceOf(NotFoundException);
  });
});
