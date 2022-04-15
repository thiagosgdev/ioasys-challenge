import { CreateEventRequestDTO } from '../dtos/events/createEventRequest.dto';
import { EventResponseDTO } from '../dtos/events/event.dto';

export const mockRequest = {
  user: {
    userId: 'any_id',
    role: 'any_role',
  },
};

export const mockEvent: EventResponseDTO = {
  id: 'any_id',
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
  addresses: null,
  activities: null,
  eventAccessibilities: null,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};

export const mockEventRequest: CreateEventRequestDTO = {
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
    accessibilities: null,
  },
};
