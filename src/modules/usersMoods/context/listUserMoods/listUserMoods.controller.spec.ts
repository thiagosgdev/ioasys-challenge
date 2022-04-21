import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import { mockRequest } from '../../../../shared/tests/events.mock';
import { ListUserMoodsController } from './listUserMoods.controller';
import { ListUserMoodsService } from './listUserMoods.service';

const mockListUserMood = [
  {
    id: 'any_id',
    userId: 'any_user_id',
    moodId: 'any_mood_id',
  },
  {
    id: 'any_other_id',
    userId: 'any_user_id',
    moodId: 'any_mood_id',
  },
];

const mockListUserMoodsService = {
  execute: jest.fn(() => {
    return mockListUserMood;
  }),
};

describe('List User Mood Controller', () => {
  let controller: ListUserMoodsController;
  let service: ListUserMoodsService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListUserMoodsController],
      providers: [
        {
          provide: ListUserMoodsService,
          useValue: mockListUserMoodsService,
        },
      ],
    }).compile();

    controller = module.get<ListUserMoodsController>(ListUserMoodsController);
    service = module.get<ListUserMoodsService>(ListUserMoodsService);
  });
  it('Should call ListUserMoodsService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockRequest);
    expect(executeSpy).toHaveBeenCalledWith('any_id');
  });
  it('Should list the userMoods on ListUserMoodsService success', async () => {
    const userMoods = await controller.handle(mockRequest);
    expect(userMoods.length).toBeGreaterThan(1);
  });

  it('Should throw if ListUserMoodsService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
