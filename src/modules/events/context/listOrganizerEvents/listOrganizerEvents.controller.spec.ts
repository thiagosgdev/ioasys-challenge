import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';

import {
  mockEventList,
  mockRequest,
} from '../../../../shared/tests/events.mock';
import { HttpException, InternalServerErrorException } from '@nestjs/common';
import { ListOrganizerEventsController } from './listOrganizerEvents.controller';
import { ListOrganizerEventsService } from './listOrganizerEvents.service';

const mockListEventsService = {
  execute: jest.fn(() => {
    return Promise.resolve(mockEventList);
  }),
};

describe('List Events Controller', () => {
  let controller: ListOrganizerEventsController;
  let service: ListOrganizerEventsService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOrganizerEventsController],
      providers: [
        {
          provide: ListOrganizerEventsService,
          useValue: mockListEventsService,
        },
      ],
    }).compile();

    controller = module.get<ListOrganizerEventsController>(
      ListOrganizerEventsController,
    );
    service = module.get<ListOrganizerEventsService>(
      ListOrganizerEventsService,
    );
  });
  it('Should call ListOrganizerEventsService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockRequest);
    expect(executeSpy).toHaveBeenCalledWith('any_id', undefined);
  });

  it('Should throw if ListOrganizerEventsService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });

  it('Should return a list of events on ListOrganizerEventsService success', async () => {
    const events = await controller.handle(mockRequest);
    expect(events.length).toBeGreaterThan(1);
  });
});
