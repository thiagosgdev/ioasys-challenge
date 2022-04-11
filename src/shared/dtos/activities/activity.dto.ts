import { ApiResponseProperty } from '@nestjs/swagger';

export class ActivityResponse {
  @ApiResponseProperty({
    example: '107e8bde-f574-4da7-8129-3280815d1c77',
  })
  id: string;

  @ApiResponseProperty({
    example: 'Futebol',
  })
  name: string;

  @ApiResponseProperty({
    example: true,
  })
  active: boolean;

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
