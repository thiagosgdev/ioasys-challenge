import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';
import { mockAddressRequest } from 'src/shared/tests/address.mock';

import { AddressResponseDTO } from '../../../../shared/dtos/address/address.dto';
import {
  mockEvent,
  mockEventOnlineRequest,
  mockEventRequest,
} from '../../../../shared/tests/events.mock';
import { CreateEventService } from './createEvent.service';

const mockEventRepository = {
  findOne: jest.fn(() => {
    return Promise.resolve(null);
  }),
  create: jest.fn(() => {
    return Promise.resolve(mockEvent);
  }),
  save: jest.fn(() => {
    return Promise.resolve(null);
  }),
};

const mockEventAccessibility = {
  id: 'any_id',
  eventId: 'any_event_id',
  accessibilityId: 'any_accessibility_id',
};

const mockAddress: AddressResponseDTO = {
  id: 'any_id',
  street: 'any_street',
  city: 'any_city',
  state: 'any_state',
  number: 123,
  zipCode: '99999-999',
  referencePoint: null,
  eventId: 'any_event_id',
  userId: null,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};

const mockEventAccessibilityRepository = {
  findOne: jest.fn(() => {
    return Promise.resolve(null);
  }),

  create: jest.fn((eventId: string, disabilityId: string) => {
    return mockEventAccessibility;
  }),
  save: jest.fn(() => {
    return Promise.resolve(null);
  }),
};

const mockAddressRepository = {
  findOne: jest.fn(() => {
    return Promise.resolve(null);
  }),
  create: jest.fn(() => {
    return Promise.resolve(mockAddress);
  }),
  save: jest.fn(() => {
    return Promise.resolve(null);
  }),
};

describe('Create Event Service', () => {
  let service: CreateEventService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateEventService,
        {
          provide: 'EVENT_REPOSITORY',
          useValue: mockEventRepository,
        },
        {
          provide: 'EVENT_ACCESSIBILITY_REPOSITORY',
          useValue: mockEventAccessibilityRepository,
        },
        {
          provide: 'ADDRESS_REPOSITORY',
          useValue: mockAddressRepository,
        },
      ],
    }).compile();

    service = module.get<CreateEventService>(CreateEventService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the event and address created on execute success', async () => {
    const response = await service.execute(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      mockEventRequest,
    );
    expect(response).toHaveProperty('event');
    expect(response).toHaveProperty('address');
  });

  it('Should create the accessibilities of the event on create success', async () => {
    const eventAccessibilitySpy = jest.spyOn(
      mockEventAccessibilityRepository,
      'create',
    );
    await service.execute(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      mockEventRequest,
    );
    expect(eventAccessibilitySpy).toHaveReturnedWith(mockEventAccessibility);
  });

  it('Should create the address of the event on create success', async () => {
    const addressSpy = jest.spyOn(mockAddressRepository, 'create');
    await service.execute(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      mockEventRequest,
    );
    expect(addressSpy).toHaveBeenCalledWith(mockAddressRequest);
  });

  it('Should not return the address on create event online sucess', async () => {
    const response = await service.execute(
      {
        userId: 'any_id',
        role: 'any_role',
      },
      mockEventOnlineRequest,
    );
    expect(response).toHaveProperty('event');
    expect(response.address).toBeUndefined();
  });
});
