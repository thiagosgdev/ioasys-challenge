import { CreateEventRequestDTO } from 'src/shared/dtos/events/createEventRequest.dto';

export interface CreateEvent {
  create(data: CreateEventRequestDTO);
}
