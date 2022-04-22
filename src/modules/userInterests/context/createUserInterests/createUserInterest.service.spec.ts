import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';
import { CreateUserInterestService } from './createUserInterest.service';

const mockUserInterest = {
  id: 'any_id',
  userId: 'any_user_id',
  activityId: 'any_activity_id',
};

const mockCreateUserInterestRepository = {
  save: jest.fn(() => {
    return mockUserInterest;
  }),

  delete: jest.fn(() => {
    return;
  }),
};

describe('Create User Interests Service', () => {
  let service: CreateUserInterestService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserInterestService,
        {
          provide: 'USER_INTEREST_REPOSITORY',
          useValue: mockCreateUserInterestRepository,
        },
      ],
    }).compile();

    service = module.get<CreateUserInterestService>(CreateUserInterestService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the userInterest on save() success', async () => {
    const response = await service.execute('any_user_id', {
      activityIds: ['any_activity_id'],
    });
    expect(response).toHaveProperty('id');
  });
});
