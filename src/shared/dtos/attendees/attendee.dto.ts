import { ApiProperty } from '@nestjs/swagger';

export class AttendeeResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  eventId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
