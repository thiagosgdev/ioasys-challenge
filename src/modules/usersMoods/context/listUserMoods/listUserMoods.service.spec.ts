import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';
import { ListUserMoodsService } from './listUserMoods.service';

const mockListUserMood = [
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

const mockUserMoodRepository = {
  find: jest.fn(() => {
    return mockListUserMood;
  }),
};

describe('List User Moods Service', () => {
  let service: ListUserMoodsService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListUserMoodsService,
        {
          provide: 'USER_MOOD_REPOSITORY',
          useValue: mockUserMoodRepository,
        },
      ],
    }).compile();

    service = module.get<ListUserMoodsService>(ListUserMoodsService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the list of userMoods on find() success', async () => {
    const response = await service.execute('any_user_id');
    expect(response.length).toBeGreaterThan(1);
    expect(response).toEqual(mockListUserMood);
  });
});
