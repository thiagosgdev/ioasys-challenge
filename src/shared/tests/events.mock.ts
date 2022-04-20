import { CreateEventRequestDTO } from '../dtos/events/createEventRequest.dto';
import { EventResponseDTO } from '../dtos/events/event.dto';
import { EventAddressResponseDTO } from '../dtos/events/eventAddressResponse.dto';
import { UpdateEventRequestDTO } from '../dtos/events/updateEventRequest.dto';
import { mockAddressRequest } from './address.mock';

export const mockRequest = {
  user: {
    userId: 'any_id',
    role: 'any_role',
  },
};

export const mockQueryParamsRequest = {
  skip: '1',
  take: '5',
};

export const mockListEventRequest = {
  eventId: 'any_event_id',
  skip: '1',
  take: '5',
};
export const mockEvent: EventResponseDTO = {
  id: 'any_event_id',
  name: 'any_name',
  description: 'any_description',
  activityId: 'any_activity_id',
  date: new Date(),
  isOnline: true,
  isPetFriendly: true,
  isPromoted: false,
  maxParticipants: 50,
  price: 0,
  startTime: '18:30',
  userId: 'any_id',
  userIdentity: 'any_identity',
  url: null,
  attendees: null,
  addresses: null,
  activities: null,
  users: null,
  eventAccessibilities: null,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};

export const mockEventList: EventResponseDTO[] = [
  {
    id: 'any_event_id',
    name: 'any_name',
    description: 'any_description',
    activityId: 'any_activity_id',
    date: new Date(),
    isOnline: true,
    isPetFriendly: true,
    isPromoted: false,
    maxParticipants: 50,
    price: 0,
    startTime: '18:30',
    userId: 'any_id',
    userIdentity: 'any_identity',
    url: null,
    attendees: null,
    addresses: null,
    activities: null,
    users: null,
    eventAccessibilities: null,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },

  {
    id: 'any_other_event_id',
    name: 'any_other_name',
    description: 'any_description',
    activityId: 'any_activity_id',
    date: new Date(),
    isOnline: true,
    isPetFriendly: true,
    isPromoted: false,
    maxParticipants: 50,
    price: 0,
    startTime: '18:30',
    userId: 'any_id',
    userIdentity: 'any_identity',
    url: null,
    attendees: null,
    addresses: null,
    activities: null,
    users: null,
    eventAccessibilities: null,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
];

export const mockUpdatedEventResponse: EventAddressResponseDTO = {
  event: {
    id: 'any_event_id',
    name: 'any_updated_name',
    description: 'any_description',
    activityId: 'any_activity_id',
    date: new Date(),
    isOnline: true,
    isPetFriendly: true,
    isPromoted: false,
    maxParticipants: 50,
    price: 0,
    startTime: '18:30',
    userId: 'any_id',
    userIdentity: 'any_identity',
    url: null,
    attendees: null,
    addresses: null,
    activities: null,
    users: null,
    eventAccessibilities: null,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
};

export const mockUpdatedEvent = {
  id: 'any_event_id',
  name: 'any_updated_name',
  description: 'any_description',
  activityId: 'any_activity_id',
  date: new Date(),
  isOnline: true,
  isPetFriendly: true,
  isPromoted: false,
  maxParticipants: 50,
  price: 0,
  startTime: '18:30',
  userId: 'any_id',
  userIdentity: 'any_identity',
  url: null,
  attendees: null,
  addresses: null,
  activities: null,
  users: null,
  eventAccessibilities: null,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};

export const mockUpdateEventRequest: UpdateEventRequestDTO = {
  event: {
    eventId: 'any_event_id',
    name: 'any_updated_name',
    userIdentity: 'any_identity',
  },
  address: {
    street: 'any_updated_street',
  },
};

export const mockEventRequest: CreateEventRequestDTO = {
  event: {
    name: 'any_name',
    description: 'any_description',
    activityId: 'any_activity_id',
    date: new Date(),
    isOnline: false,
    isPetFriendly: true,
    isPromoted: false,
    maxParticipants: 50,
    price: 0,
    startTime: '18:30',
    userId: 'any_id',
    userIdentity: 'any_identity',
    accessibilities: ['any_disability_id'],
  },
  address: mockAddressRequest,
};

export const mockEventOnlineRequest: CreateEventRequestDTO = {
  event: {
    name: 'any_name',
    description: 'any_description',
    activityId: 'any_activity_id',
    date: new Date(),
    isOnline: true,
    isPetFriendly: true,
    isPromoted: false,
    maxParticipants: 50,
    price: 0,
    startTime: '18:30',
    userId: 'any_id',
    userIdentity: 'any_identity',
    accessibilities: ['any_disability_id'],
  },
};
