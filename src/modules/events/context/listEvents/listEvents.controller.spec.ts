import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';

import { mockEvent, mockEventList } from '../../../../shared/tests/events.mock';
import { ListEventsController } from './listEvents.controller';
import { ListEventsService } from './listEvents.service';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

const mockListEventsService = {
  execute: jest.fn(() => {
    return Promise.resolve(mockEventList);
  }),
};

describe('List Events Controller', () => {
  let controller: ListEventsController;
  let service: ListEventsService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListEventsController],
      providers: [
        {
          provide: ListEventsService,
          useValue: mockListEventsService,
        },
      ],
    }).compile();

    controller = module.get<ListEventsController>(ListEventsController);
    service = module.get<ListEventsService>(ListEventsService);
  });
  it('Should call ListEventsService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle('event_id');
    expect(executeSpy).toHaveBeenCalledWith('event_id');
  });

  it('Should throw if ListEventsService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle('event_id');
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });

  it('Should return a list of events on ListEventsService success', async () => {
    const events = await controller.handle();
    expect(events.length).toBeGreaterThan(1);
  });
});
