import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';
import { ListActivitiesService } from './listActivities.service';

const mockListActivities = [
  {
    id: 'any_id',
    name: 'any_name',
    active: true,
    urlActive: 'any_url',
    urlInactive: 'any_url',
  },
  {
    id: 'any_id',
    name: 'any_name',
    active: true,
    urlActive: 'any_url',
    urlInactive: 'any_url',
  },
];

const mockActivitiesRepository = {
  find: jest.fn(() => {
    return mockListActivities;
  }),
};

describe('List Activities Service', () => {
  let service: ListActivitiesService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListActivitiesService,
        {
          provide: 'ACTIVITY_REPOSITORY',
          useValue: mockActivitiesRepository,
        },
      ],
    }).compile();

    service = module.get<ListActivitiesService>(ListActivitiesService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the list of activities on find() success', async () => {
    const response = await service.execute();
    expect(response.length).toBeGreaterThan(1);
    expect(response).toEqual(mockListActivities);
  });
});
