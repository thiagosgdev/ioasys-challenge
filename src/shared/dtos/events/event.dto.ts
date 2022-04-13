import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { Activity } from '../../entities/activity.entity';
import { ActivityResponse } from '../activities/activity.dto';
import { AddressResponse } from '../address/address.dto';
import { EventAccessibilityDTO } from '../eventAcessibilities/eventAcessibility.dto';

export class EventResponseDTO {
  @ApiResponseProperty({
    example: '3b91a313-13fc-40ad-9fa9-18781fd7446d',
  })
  id: string;

  @ApiResponseProperty({
    example: 'Any name',
  })
  name: string;

  @ApiResponseProperty({
    example: 'Any description',
  })
  description: string;

  @ApiResponseProperty({
    example: false,
  })
  isOnline: boolean;

  @ApiResponseProperty({
    example: '2022-04-22',
  })
  date: Date;

  @ApiResponseProperty({
    example: true,
  })
  isPetFriendly: boolean;

  @ApiResponseProperty({
    example: 20,
  })
  maxParticipants: number;

  @ApiResponseProperty({
    example: '1500',
  })
  startTime: string;

  @ApiResponseProperty({
    example: 'a7dc7c2b-4a7a-450e-b574-6b6f7ff5e14b',
  })
  activityId: string;

  @ApiResponseProperty({
    example: 'c20d379d-0774-43d5-aa78-0e94480b3fe8',
  })
  userId: string;

  @ApiResponseProperty({
    example: 99.99,
  })
  price: number;

  @ApiResponseProperty({
    example: false,
  })
  isPromoted: boolean;

  @ApiResponseProperty({
    example: '123.456.789-99',
  })
  userIdentity: string;

  @ApiResponseProperty({
    type: AddressResponse,
  })
  addresses: AddressResponse;

  @ApiProperty({
    type: ActivityResponse,
  })
  activities: Activity;

  @ApiProperty({
    type: EventAccessibilityDTO,
  })
  eventAccessibilities: EventAccessibilityDTO[];

  @ApiResponseProperty({
    example: 25,
  })
  numParticipants? = 0;

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty({
    example: null,
  })
  updatedAt: Date;

  @ApiResponseProperty({
    example: null,
  })
  deletedAt: Date;
}
