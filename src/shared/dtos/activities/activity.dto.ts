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

  @ApiResponseProperty({
    example:
      'https://randomwordgenerator.com/img/picture-generator/52e1d5424b56aa14f1dc8460962e33791c3ad6e04e50744074267bd69149c7_640.jpg',
  })
  urlActive: string;

  @ApiResponseProperty({
    example:
      'https://randomwordgenerator.com/img/picture-generator/57e8d4474a51ae14f1dc8460962e33791c3ad6e04e507440742a7ad19e49cc_640.jpg',
  })
  urlInactive: string;

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
