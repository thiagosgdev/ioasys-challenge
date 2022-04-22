import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import { mockEventList } from '../../../../shared/tests/events.mock';
import { EventRepo } from '../../repositories/events.repository';
import { ListEventsService } from './listEvents.service';

const mockEventRepo = {
  listEvents: jest.fn(() => {
    return Promise.resolve(mockEventList);
  }),
};

describe('List Events Service', () => {
  let service: ListEventsService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListEventsService,
        {
          provide: EventRepo,
          useValue: mockEventRepo,
        },
      ],
    }).compile();

    service = module.get<ListEventsService>(ListEventsService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the list of events on execute success', async () => {
    const response = await service.execute();
    expect(response.length).toBeGreaterThan(1);
  });
  it('Should return an empty array if no event is found', async () => {
    jest.spyOn(mockEventRepo, 'listEvents').mockResolvedValue([]);
    const response = await service.execute();
    expect(response.length).toBe(0);
  });
});
