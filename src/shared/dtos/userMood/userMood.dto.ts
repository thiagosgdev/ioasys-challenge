import { ApiProperty } from '@nestjs/swagger';

export class UserMoodResponseDTO {
  @ApiProperty({
    example: '4f9193a5-ff69-4e57-8f0d-a2866b2e83d1',
  })
  id: string;

  @ApiProperty({
    example: '15ff6cb5-903f-49fc-8ddd-ffb26440286d',
  })
  userId: string;

  @ApiProperty({
    example: 'a73c67e6-603c-48a6-807b-c9395316376e',
  })
  moodId: string;

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
