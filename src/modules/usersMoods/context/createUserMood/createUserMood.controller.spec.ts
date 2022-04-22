import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import { mockRequest } from '../../../../shared/tests/events.mock';
import { CreateUserMoodController } from './createUserMood.controller';
import { CreateUserMoodService } from './createUserMood.service';

const mockUserMood = {
  id: 'any_id',
  userId: 'any_user_id',
  moodId: 'any_mood_id',
};

const mockCreateUserMoodService = {
  execute: jest.fn(() => {
    return mockUserMood;
  }),
};

describe('Create User Mood Controller', () => {
  let controller: CreateUserMoodController;
  let service: CreateUserMoodService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserMoodController],
      providers: [
        {
          provide: CreateUserMoodService,
          useValue: mockCreateUserMoodService,
        },
      ],
    }).compile();

    controller = module.get<CreateUserMoodController>(CreateUserMoodController);
    service = module.get<CreateUserMoodService>(CreateUserMoodService);
  });
  it('Should call CreateUserMoodService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(
      {
        moodId: 'any_mood_id',
      },
      mockRequest,
    );
    expect(executeSpy).toHaveBeenCalledWith('any_id', {
      moodId: 'any_mood_id',
    });
  });
  it('Should create an event on CreateUserMoodService success', async () => {
    const response = await controller.handle(
      {
        moodId: 'any_mood_id',
      },
      mockRequest,
    );
    expect(response).toHaveProperty('id');
  });

  it('Should throw if CreateUserMoodService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(
      {
        moodId: 'any_mood_id',
      },
      mockRequest,
    );
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
