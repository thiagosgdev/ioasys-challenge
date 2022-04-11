import { ApiProperty } from '@nestjs/swagger';

export class AttendeeResponse {
  @ApiProperty({
    example: '82ef7258-6066-468f-8f8d-ed34790f5621',
  })
  id: string;

  @ApiProperty({
    examples: ['CONFIRMED', 'MAYBE', 'DECLINED'],
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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({
    example: null,
  })
  updatedAt: Date;

  @ApiProperty({
    example: null,
  })
  deletedAt: Date;
}
