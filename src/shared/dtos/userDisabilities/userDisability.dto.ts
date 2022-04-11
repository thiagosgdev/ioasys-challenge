import { ApiProperty } from '@nestjs/swagger';

export class UserDisabilitieResponseDTO {
  @ApiProperty({
    example: '31f6cd92-3e4d-437d-ab32-aff24be9edc3',
  })
  id: string;

  @ApiProperty({
    example: '15ff6cb5-903f-49fc-8ddd-ffb26440286d',
  })
  userId: string;

  @ApiProperty({
    example: 'bd7a7819-b47f-4351-b9c4-ab46c4abc57d',
  })
  activityId: boolean;

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
