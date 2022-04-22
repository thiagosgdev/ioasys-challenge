import { ApiProperty } from '@nestjs/swagger';
import { DisabilitiesResponse } from '../disabilities/disabilitiesResponse.dto';

export class EventAccessibilityDTO {
  @ApiProperty({
    example: '3b91a313-13fc-40ad-9fa9-18781fd7446d',
  })
  id: string;

  @ApiProperty({
    example: 'Any name',
  })
  disabilityId: string;

  @ApiProperty({
    example: 'Any description',
  })
  eventId: string;

  @ApiProperty({
    type: DisabilitiesResponse,
  })
  acessibilities: DisabilitiesResponse;

  @ApiProperty({
    example: '2022-04-22',
  })
  createdAt: Date;

  @ApiProperty({
    example: null,
  })
  updatedAt: Date;

  @ApiProperty({
    example: '2022-04-22',
  })
  deletedAt: Date;
}
