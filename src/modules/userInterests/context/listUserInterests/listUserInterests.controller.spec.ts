import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import { ListUserInterestsService } from './listUserInterests.service';
import { ListUserInterestsController } from './listUserInterests.controller';

const mockListUserInterests = [
  {
    id: 'any_id',
    userId: 'any_user_id',
    activityId: 'any_activity_id',
  },
  {
    id: 'any_other_id',
    userId: 'any_user_id',
    activityId: 'any_activity_id',
  },
];

const mockListUserInterestssService = {
  execute: jest.fn(() => {
    return mockListUserInterests;
  }),
};

describe('List User Interests Controller', () => {
  let controller: ListUserInterestsController;
  let service: ListUserInterestsService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListUserInterestsController],
      providers: [
        {
          provide: ListUserInterestsService,
          useValue: mockListUserInterestssService,
        },
      ],
    }).compile();

    controller = module.get<ListUserInterestsController>(
      ListUserInterestsController,
    );
    service = module.get<ListUserInterestsService>(ListUserInterestsService);
  });

  it('Should list the userMoods on ListUserInterestsService success', async () => {
    const userMoods = await controller.handle();
    expect(userMoods.length).toBeGreaterThan(1);
  });

  it('Should throw if ListUserInterestsService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle();
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
