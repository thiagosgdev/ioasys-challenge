import { ApiResponseProperty } from '@nestjs/swagger';

export class AddressResponse {
  @ApiResponseProperty({
    example: '6dc05b64-81e9-4ad6-8875-4b37f7ee0eee',
  })
  id: string;

  @ApiResponseProperty({
    example: 'Avenida Paulista',
  })
  street: string;

  @ApiResponseProperty({
    example: 123,
  })
  number: number;

  @ApiResponseProperty({
    example: 'São Paulo',
  })
  city: string;

  @ApiResponseProperty({
    example: 'SP',
  })
  state: string;

  @ApiResponseProperty({
    example: '12345-678',
  })
  zipCode: string;

  @ApiResponseProperty({
    example: 'Next to the Sunset Park',
  })
  referencePoint: string;

  @ApiResponseProperty({
    example: '404d6e94-d948-4e10-9652-c2365e6d6f50',
  })
  userId: string;

  @ApiResponseProperty({
    example: 'aac11a3b-4fa7-43c9-abac-df068554e2e9',
  })
  eventId: string;

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
