import { ApiResponseProperty } from '@nestjs/swagger';

export class ActivityCategoryResponse {
  @ApiResponseProperty({
    example: '107e8bde-f574-4da7-8129-3280815d1c77',
  })
  id: string;

  @ApiResponseProperty({
    example: '1ac96fe3-f65a-48d3-b193-6b7e448aa6df',
  })
  activityId: string;

  @ApiResponseProperty({
    example: '6dc05b64-81e9-4ad6-8875-4b37f7ee0eee',
  })
  categoryId: string;

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
