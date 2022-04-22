import MockDate from 'mockdate';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, InternalServerErrorException } from '@nestjs/common';

import {
  mockEvent,
  mockEventRequest,
  mockRequest,
} from '../../../../shared/tests/events.mock';
import { CreateEventController } from './createEvent.controller';
import { CreateEventService } from './createEvent.service';

class mockCreateEventService {
  execute() {
    return mockEvent;
  }
}

describe('Create Event Controller', () => {
  let controller: CreateEventController;
  let service: CreateEventService;
  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateEventController],
      providers: [
        {
          provide: CreateEventService,
          useClass: mockCreateEventService,
        },
      ],
    }).compile();

    controller = module.get<CreateEventController>(CreateEventController);
    service = module.get<CreateEventService>(CreateEventService);
  });
  it('Should call CreateEventService with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await controller.handle(mockRequest, mockEventRequest);
    expect(executeSpy).toHaveBeenCalledWith(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      mockEventRequest,
    );
  });
  it('Should create an event on CreateEventService success', async () => {
    const event = await controller.handle(mockRequest, mockEventRequest);
    expect(event).toHaveProperty('id');
  });

  it('Should throw if CreateEventService throws', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new InternalServerErrorException());
    const response = controller.handle(mockRequest, mockEventRequest);
    await expect(response).rejects.toBeInstanceOf(HttpException);
  });
});
