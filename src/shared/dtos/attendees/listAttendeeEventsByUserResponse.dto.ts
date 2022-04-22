import { ApiProperty } from '@nestjs/swagger';
import { EventResponseDTO } from '../events/event.dto';

export class ListAttendeeEventsByUserResponseDTO {
  @ApiProperty({
    example: '82ef7258-6066-468f-8f8d-ed34790f5621',
  })
  id: string;

  @ApiProperty({
    examples: ['CONFIRMED', 'SAVED'],
  })
  status: string;

  @ApiProperty({
    example: 'ed6d994e-7dfb-4d9c-888b-9badd867574d',
  })
  userId: string;

  @ApiProperty({
    example: '6d3c273e-dd69-41ba-b70a-b841bf786ca2',
  })
  eventId: string;

  @ApiProperty({
    example: '2022-04-17T13:44:05.288Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: null,
  })
  updateAt: Date;

  @ApiProperty({
    example: null,
  })
  deletedAt: Date;

  @ApiProperty({
    type: EventResponseDTO,
  })
  event: EventResponseDTO;
}
