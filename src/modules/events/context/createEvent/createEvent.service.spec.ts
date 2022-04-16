import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import MockDate from 'mockdate';

import {
  mockEvent,
  mockEventRequest,
} from '../../../../shared/tests/events.mock';
import { CreateEventService } from './createEvent.service';

class mockEventRepository {
  findOne() {
    return null;
  }
  create() {
    return mockEvent;
  }
  save() {
    return null;
  }
}

const mockEventAccessibility = {
  id: 'any_id',
  eventId: 'any_event_id',
  accessibilityId: 'any_accessibility_id',
};

class mockEventAccessibilityRepository {
  findOne() {
    return null;
  }
  create() {
    return mockEventAccessibility;
  }
  save() {
    return null;
  }
}

class mockAddressRepository {
  findOne() {
    return null;
  }
  create() {
    return mockEvent;
  }
  save() {
    return null;
  }
}

describe('Create Event Service', () => {
  let service: CreateEventService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateEventService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => {
              null;
            }),
          },
        },
        {
          provide: 'EVENT_REPOSITORY',
          useClass: mockEventRepository,
        },
        {
          provide: 'EVENT_ACCESSIBILITY_REPOSITORY',
          useClass: mockEventAccessibilityRepository,
        },
        {
          provide: 'ADDRESS_REPOSITORY',
          useClass: mockAddressRepository,
        },
      ],
    }).compile();

    service = module.get<CreateEventService>(CreateEventService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the event created on execute success', async () => {
    const response = await service.execute(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      mockEventRequest,
    );
    expect(response).toHaveProperty('event');
  });
});
