import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import { mockEventList } from '../../../../shared/tests/events.mock';
import { EventRepo } from '../../repositories/events.repository';
import { ListEventsByUserInterestsService } from './listEventsByUserInterests.service';

const mockEventRepo = {
  listEventsByUserInterests: jest.fn(() => {
    return mockEventList;
  }),
};

const mockUserMoodRepository = {
  findOne: jest.fn(() => {
    return {
      id: 'any_id',
      userId: 'any_user_id',
      moodId: 'any_mood_id',
    };
  }),
};
const mockMoodActivitiesResponse = [
  {
    id: 'any_id',
    moodId: 'any_mood_id',
    activityId: 'any_activity_id',
  },
  {
    id: 'any_other_id',
    moodId: 'any_other_mood_id',
    activityId: 'any_other_activity_id',
  },
];
const mockMoodActivityRepository = {
  find: jest.fn(() => {
    return mockMoodActivitiesResponse;
  }),
};
describe('List Events by User Interests Service', () => {
  let service: ListEventsByUserInterestsService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListEventsByUserInterestsService,
        {
          provide: EventRepo,
          useValue: mockEventRepo,
        },
        {
          provide: 'MOOD_ACTIVITY_REPOSITORY',
          useValue: mockMoodActivityRepository,
        },
        {
          provide: 'USER_MOOD_REPOSITORY',
          useValue: mockUserMoodRepository,
        },
      ],
    }).compile();

    service = module.get<ListEventsByUserInterestsService>(
      ListEventsByUserInterestsService,
    );
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the list of events on execute success', async () => {
    const response = await service.execute({
      userId: 'any_id',
      role: 'any_role',
    });
    expect(response.length).toBeGreaterThan(1);
  });

  it('Should call UserMoodRepository findOne()', async () => {
    const findOneSpy = jest.spyOn(mockUserMoodRepository, 'findOne');
    await service.execute({
      userId: 'any_id',
      role: 'premium',
    });
    expect(findOneSpy).toHaveBeenCalled();
  });

  it('Should call MoodActivity find()', async () => {
    const findSpy = jest.spyOn(mockMoodActivityRepository, 'find');
    await service.execute({
      userId: 'any_id',
      role: 'premium',
    });
    expect(findSpy).toHaveBeenCalled();
  });
});
