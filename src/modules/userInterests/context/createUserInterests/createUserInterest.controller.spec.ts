import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import { mockRequest } from '../../../../shared/tests/events.mock';
import { CreateUserInterestController } from './createUserInterest.controller';
import { CreateUserInterestService } from './createUserInterest.service';

const mockUserInterest = {
  id: 'any_id',
  userId: 'any_user_id',
  activityId: 'any_activity_id',
};

const mockCreateUserInterestService = {
  execute: jest.fn(() => {
    return mockUserInterest;
  }),
};

describe('Create User Interests Controller', () => {
  let controller: CreateUserInterestController;
  let service: CreateUserInterestService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserInterestController],
      providers: [
        {
          provide: CreateUserInterestService,
          useValue: mockCreateUserInterestService,
        },
      ],
    }).compile();

    controller = module.get<CreateUserInterestController>(
      CreateUserInterestController,
    );
    service = module.get<CreateUserInterestService>(CreateUserInterestService);
  });
  it('Should call CreateUserInterestService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockRequest, { activityIds: ['any_activity_id'] });
    expect(executeSpy).toHaveBeenCalledWith('any_id', {
      activityIds: ['any_activity_id'],
    });
  });
  it('Should create an event on CreateUserInterestService success', async () => {
    const response = await controller.handle(mockRequest, {
      activityIds: ['any_activity_id'],
    });
    expect(response).toHaveProperty('id');
  });

  it('Should throw if CreateUserInterestService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockRequest, {
      activityIds: ['any_activity_id'],
    });
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
