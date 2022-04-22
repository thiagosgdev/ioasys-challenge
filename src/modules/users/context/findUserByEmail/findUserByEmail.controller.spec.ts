import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, NotFoundException } from '@nestjs/common';

import { mockUser } from '../../../../shared/tests/users.mock';
import { mockRequest } from '../../../../shared/tests/events.mock';
import { FindUserByEmailController } from './findUserByEmail.controller';
import { FindUserByEmailService } from './findUserByEmail.service';

class mockFindUserByEmailService {
  execute() {
    return mockUser;
  }
}

describe('Find User by Email Controller', () => {
  let controller: FindUserByEmailController;
  let service: FindUserByEmailService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindUserByEmailController],
      providers: [
        {
          provide: FindUserByEmailService,
          useClass: mockFindUserByEmailService,
        },
      ],
    }).compile();

    controller = module.get<FindUserByEmailController>(
      FindUserByEmailController,
    );
    service = module.get<FindUserByEmailService>(FindUserByEmailService);
  });
  it('Should call FindUserByIdService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle('any_email@test.com');
    expect(executeSpy).toHaveBeenCalledWith('any_email@test.com');
  });

  it('Should return the user on FindUserByIdService success', async () => {
    const response = await controller.handle('any_email@test.com');
    expect(response).toEqual(mockUser);
  });

  it('Should throw if FindUserByIdService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockReturnValueOnce(
        Promise.reject(new NotFoundException('No user found!')),
      );
    const response = controller.handle('any_email@test.com');
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
