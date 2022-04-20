import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import { CreateUserMoodService } from './createUserMood.service';

const mockUserMood = {
  id: 'any_id',
  userId: 'any_user_id',
  moodId: 'any_mood_id',
};

const mockCreateUserMoodRepository = {
  save: jest.fn(() => {
    return mockUserMood;
  }),
};

describe('Create User Mood Service', () => {
  let service: CreateUserMoodService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserMoodService,
        {
          provide: 'USER_MOOD_REPOSITORY',
          useValue: mockCreateUserMoodRepository,
        },
      ],
    }).compile();

    service = module.get<CreateUserMoodService>(CreateUserMoodService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the userMood on save() success', async () => {
    const response = await service.execute('any_user_id', {
      moodId: 'any_mood_id',
    });
    expect(response).toHaveProperty('id');
  });
});
