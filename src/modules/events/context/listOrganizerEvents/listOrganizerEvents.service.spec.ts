import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import { mockEventList } from '../../../../shared/tests/events.mock';
import { EventRepo } from '../../repositories/events.repository';
import { ListOrganizerEventsService } from './listOrganizerEvents.service';

const mockEventRepo = {
  listOrganizerEvents: jest.fn(() => {
    return Promise.resolve(mockEventList);
  }),
};

describe('List Organizer Events Service', () => {
  let service: ListOrganizerEventsService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListOrganizerEventsService,
        {
          provide: EventRepo,
          useValue: mockEventRepo,
        },
      ],
    }).compile();

    service = module.get<ListOrganizerEventsService>(
      ListOrganizerEventsService,
    );
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the list of events on execute success', async () => {
    const response = await service.execute('any_user_id');
    expect(response.length).toBeGreaterThan(1);
  });
  it('Should return an empty array if no event is found', async () => {
    jest.spyOn(mockEventRepo, 'listOrganizerEvents').mockResolvedValue([]);
    const response = await service.execute('any_user_id');
    expect(response.length).toBe(0);
  });
});
