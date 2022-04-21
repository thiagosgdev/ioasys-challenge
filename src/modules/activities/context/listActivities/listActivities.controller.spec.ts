import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';
import { ListActivitiesService } from './listActivities.service';
import { ListActivitiesController } from './listActivities.controller';

const mockListActivities = [
  {
    id: 'any_id',
    name: 'any_name',
    active: true,
    urlActive: 'any_url',
    urlInactive: 'any_url',
  },
  {
    id: 'any_id',
    name: 'any_name',
    active: true,
    urlActive: 'any_url',
    urlInactive: 'any_url',
  },
];

const mockListActivitiesService = {
  execute: jest.fn(() => {
    return mockListActivities;
  }),
};

describe('List Activities Controller', () => {
  let controller: ListActivitiesController;
  let service: ListActivitiesService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListActivitiesController],
      providers: [
        {
          provide: ListActivitiesService,
          useValue: mockListActivitiesService,
        },
      ],
    }).compile();

    controller = module.get<ListActivitiesController>(ListActivitiesController);
    service = module.get<ListActivitiesService>(ListActivitiesService);
  });

  it('Should list the activities on ListActivitiesService success', async () => {
    const userMoods = await controller.handle();
    expect(userMoods.length).toBeGreaterThan(1);
  });

  it('Should throw if ListActivitiesService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle();
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
