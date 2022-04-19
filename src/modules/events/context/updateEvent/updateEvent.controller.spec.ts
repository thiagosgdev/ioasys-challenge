import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import {
  mockUpdatedEventResponse,
  mockUpdateEventRequest,
} from '../../../../shared/tests/events.mock';
import { UpdateEventController } from './updateEvent.controller';
import { UpdateEventService } from './updateEvent.service';

const mockUpdateEventService = {
  execute: jest.fn(async () => {
    return Promise.resolve(mockUpdatedEventResponse);
  }),
};

describe('Update Event Controller', () => {
  let controller: UpdateEventController;
  let service: UpdateEventService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateEventController],
      providers: [
        {
          provide: UpdateEventService,
          useValue: mockUpdateEventService,
        },
      ],
    }).compile();

    controller = module.get<UpdateEventController>(UpdateEventController);
    service = module.get<UpdateEventService>(UpdateEventService);
  });
  it('Should call UpdateEventService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockUpdateEventRequest);
    expect(executeSpy).toHaveBeenCalledWith(mockUpdateEventRequest);
  });

  it('Should throw if UpdateEventsService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockUpdateEventRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });

  it('Should return the updated event on UpdateEventService success', async () => {
    const response = await controller.handle(mockUpdateEventRequest);
    expect(response.event.name).toBe('any_updated_name');
  });
});
