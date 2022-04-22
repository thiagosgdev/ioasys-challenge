import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import {
  mockEventList,
  mockListEventRequest,
  mockQueryParamsRequest,
  mockRequest,
} from '../../../../shared/tests/events.mock';
import { ListEventsByUserInterestsService } from './listEventsByUserInterests.service';
import { ListEventsByUserInterestsController } from './listEventsByUserInterests.controller';

const mockListEventsByUserInterestsService = {
  execute: jest.fn(() => {
    return Promise.resolve(mockEventList);
  }),
};

describe('List Events by User Interests Controller', () => {
  let controller: ListEventsByUserInterestsController;
  let service: ListEventsByUserInterestsService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListEventsByUserInterestsController],
      providers: [
        {
          provide: ListEventsByUserInterestsService,
          useValue: mockListEventsByUserInterestsService,
        },
      ],
    }).compile();

    controller = module.get<ListEventsByUserInterestsController>(
      ListEventsByUserInterestsController,
    );
    service = module.get<ListEventsByUserInterestsService>(
      ListEventsByUserInterestsService,
    );
  });
  it('Should call ListEventsByUserInterestsService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockRequest);
    expect(executeSpy).toHaveBeenCalledWith(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      undefined,
    );
  });

  it('Should throw if ListEventsByUserInterestsService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockRequest, mockQueryParamsRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });

  it('Should return a list of events on ListEventsByUserInterestsService success', async () => {
    const events = await controller.handle(mockRequest, mockQueryParamsRequest);
    expect(events.length).toBeGreaterThan(1);
  });
});
