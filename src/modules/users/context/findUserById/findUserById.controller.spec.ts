import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';

import { mockUser } from '../../../../shared/tests/users.mock';
import { mockRequest } from '../../../../shared/tests/events.mock';
import { FindUserByIdController } from './findUserById.controller';
import { FindUserByIdService } from './findUserById.service';
import { HttpException, NotFoundException } from '@nestjs/common';

class mockFindUserByIdService {
  execute() {
    return mockUser;
  }
}

describe('Find User by Id Controller', () => {
  let controller: FindUserByIdController;
  let service: FindUserByIdService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindUserByIdController],
      providers: [
        {
          provide: FindUserByIdService,
          useClass: mockFindUserByIdService,
        },
      ],
    }).compile();

    controller = module.get<FindUserByIdController>(FindUserByIdController);
    service = module.get<FindUserByIdService>(FindUserByIdService);
  });
  it('Should call FindUserByIdService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockRequest);
    expect(executeSpy).toHaveBeenCalledWith('any_id');
  });

  it('Should return the user on FindUserByIdService success', async () => {
    const response = await controller.handle(mockRequest);
    expect(response).toEqual(mockUser);
  });

  it('Should throw if FindUserByIdService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockReturnValueOnce(
        Promise.reject(new NotFoundException('No user found!')),
      );
    const response = controller.handle(mockRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
