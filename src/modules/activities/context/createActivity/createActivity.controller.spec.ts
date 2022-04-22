import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import { CreateActivityController } from './createActivity.controller';
import { CreateActivityService } from './createActivity.service';

const mockActivity = {
  id: 'any_id',
  name: 'any_name',
  active: true,
  urlActive: 'any_url',
  urlInactive: 'any_url',
};

const mockActivityRequest = {
  name: 'any_name',
  active: true,
  urlActive: 'any_url',
  urlInactive: 'any_url',
};

const mockCreateActivityService = {
  execute: jest.fn(() => {
    return mockActivity;
  }),
};

describe('Create Activity Controller', () => {
  let controller: CreateActivityController;
  let service: CreateActivityService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateActivityController],
      providers: [
        {
          provide: CreateActivityService,
          useValue: mockCreateActivityService,
        },
      ],
    }).compile();

    controller = module.get<CreateActivityController>(CreateActivityController);
    service = module.get<CreateActivityService>(CreateActivityService);
  });
  it('Should call CreateActivityService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockActivityRequest);
    expect(executeSpy).toHaveBeenCalledWith(mockActivityRequest);
  });
  it('Should create an event on CreateActivityService success', async () => {
    const response = await controller.handle(mockActivityRequest);
    expect(response).toHaveProperty('id');
  });

  it('Should throw if CreateActivityService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockActivityRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
