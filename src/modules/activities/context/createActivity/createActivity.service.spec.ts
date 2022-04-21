import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import { CreateActivityService } from './createActivity.service';

const mockActivity = {
  id: 'any_id',
  name: 'any_name',
  active: true,
  urlActive: 'any_url',
  urlInactive: 'any_url',
};

const mockActivityRequest = {
  name: 'any_name',
  active: true,
  urlActive: 'any_url',
  urlInactive: 'any_url',
};

const mockCreateActivityRepository = {
  save: jest.fn(() => {
    return mockActivity;
  }),

  delete: jest.fn(() => {
    return;
  }),
};

describe('Create Activity Service', () => {
  let service: CreateActivityService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateActivityService,
        {
          provide: 'ACTIVITY_REPOSITORY',
          useValue: mockCreateActivityRepository,
        },
      ],
    }).compile();

    service = module.get<CreateActivityService>(CreateActivityService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the activity on save() success', async () => {
    const response = await service.execute(mockActivityRequest);
    expect(response).toHaveProperty('id');
  });
});
