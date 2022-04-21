import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import { ListUserInterestsService } from './listUserInterests.service';

const mockListUserInterests = [
  {
    id: 'any_id',
    userId: 'any_user_id',
    moodId: 'any_mood_id',
  },
  {
    id: 'any_other_id',
    userId: 'any_user_id',
    moodId: 'any_mood_id',
  },
];

const mockUserInterestsRepository = {
  find: jest.fn(() => {
    return mockListUserInterests;
  }),
};

describe('List User Interests Service', () => {
  let service: ListUserInterestsService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListUserInterestsService,
        {
          provide: 'USER_INTEREST_REPOSITORY',
          useValue: mockUserInterestsRepository,
        },
      ],
    }).compile();

    service = module.get<ListUserInterestsService>(ListUserInterestsService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the list of userInterests on find() success', async () => {
    const response = await service.execute();
    expect(response.length).toBeGreaterThan(1);
    expect(response).toEqual(mockListUserInterests);
  });
});
