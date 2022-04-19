import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import MockDate from 'mockdate';

import {
  mockEvent,
  mockUpdatedEvent,
  mockUpdateEventRequest,
} from '../../../../shared/tests/events.mock';
import { AddressResponseDTO } from '../../../../shared/dtos/address/address.dto';
import { UpdateEventService } from './updateEvent.service';

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

const mockEventRepository = {
  findOne: jest.fn(() => {
    return mockEvent;
  }),

  save: jest.fn(() => {
    return Promise.resolve(mockUpdatedEvent);
  }),
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
describe('Update Events Service', () => {
  let service: UpdateEventService;

  beforeEach(async () => {
    MockDate.set(new Date());

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateEventService,
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

    service = module.get<UpdateEventService>(UpdateEventService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
  it('Should return the updated event on execute success', async () => {
    const response = await service.execute(mockUpdateEventRequest);
    expect(response.event.name).toBe('any_updated_name');
  });

  it('Should throw NotFoundException if no event is found on findOne', async () => {
    jest.spyOn(mockEventRepository, 'findOne').mockReturnValueOnce(null);
    const response = service.execute(mockUpdateEventRequest);
    await expect(response).rejects.toBeInstanceOf(NotFoundException);
  });

  it('Should call AddressRepository if an address is given', async () => {
    const addressSpy = jest.spyOn(mockAddressRepository, 'findOne');
    await service.execute(mockUpdateEventRequest);
    expect(addressSpy).toHaveBeenCalled();
  });
});
