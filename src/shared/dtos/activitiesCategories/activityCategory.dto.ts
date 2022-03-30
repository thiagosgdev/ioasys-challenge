import { ApiProperty } from '@nestjs/swagger';

export class ActivityCategoryResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  activityId: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
