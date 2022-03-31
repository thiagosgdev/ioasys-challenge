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
  date: Date;

  @ApiResponseProperty()
  minimumAge: number;

  @ApiResponseProperty()
  maxParticipants: number;

  @ApiResponseProperty()
  startTime: string;

  @ApiResponseProperty()
  endTime: string;

  @ApiResponseProperty()
  activityId: string;

  @ApiResponseProperty()
  userId: string;

  @ApiResponseProperty()
  userIdentity: number;

  @ApiResponseProperty()
  isAccessible: boolean;

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @ApiResponseProperty()
  deletedAt: Date;
}
