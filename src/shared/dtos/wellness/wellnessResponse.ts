import { ApiResponseProperty } from '@nestjs/swagger';

export class WellnessTipsResponseDTO {
  @ApiResponseProperty({
    example: 'ce743f3d-a4f7-4463-ae48-5d480378ca41',
  })
  id: string;

  @ApiResponseProperty({
    example: 'Any title',
  })
  title: string;

  @ApiResponseProperty({
    example: 'Any description',
  })
  description: string;

  @ApiResponseProperty({
    example:
      'https://i.picsum.photos/id/1000/360/300.jpg?hmac=jNiTq05sReJh4XUHdveLzABQSwtyjuCZqWwHNBQ2kwI',
  })
  imageUrl: string;

  @ApiResponseProperty({
    example: '2022-04-20 21:13:04.540144',
  })
  createdAt: Date;
}
