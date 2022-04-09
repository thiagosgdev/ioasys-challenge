import { ApiResponseProperty } from '@nestjs/swagger';

export class EventResponseDTO {
  @ApiResponseProperty()
  id: string;

  @ApiResponseProperty()
  name: string;

  @ApiResponseProperty()
  description: string;

  @ApiResponseProperty()
  isOnline: boolean;

  @ApiResponseProperty()
  date: string;

  @ApiResponseProperty()
  maxParticipants: number;

  @ApiResponseProperty()
  startTime: string;

  @ApiResponseProperty()
  activityId: string;

  @ApiResponseProperty()
  userId: string;

  @ApiResponseProperty()
  price: number;

  @ApiResponseProperty()
  isPromoted: boolean;

  @ApiResponseProperty()
  userIdentity: string;

  @ApiResponseProperty()
  accessibilities: string[];

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @ApiResponseProperty()
  deletedAt: Date;
}
