import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { mockUser } from '../../../../shared/tests/users.mock';
import { FindUserByIdService } from './findUserById.service';

const mockUserRepository = {
  findOne: (): Promise<UserDTO | null> => {
    return Promise.resolve(mockUser);
  },
};

describe('Find User by Email Service', () => {
  let service: FindUserByIdService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindUserByIdService,
        {
          provide: 'USER_REPOSITORY',
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<FindUserByIdService>(FindUserByIdService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('Should return the user on findOne() success', async () => {
    const response = await service.execute('any_user_id');
    expect(response).toEqual(mockUser);
  });

  it('Should throw NotFoundException if no user is found', async () => {
    jest
      .spyOn(mockUserRepository, 'findOne')
      .mockReturnValueOnce(Promise.resolve(null));
    const response = service.execute('any_user_id');
    await expect(response).rejects.toBeInstanceOf(NotFoundException);
  });
});
