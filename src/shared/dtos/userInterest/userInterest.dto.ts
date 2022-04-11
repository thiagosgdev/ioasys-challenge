import { ApiProperty } from '@nestjs/swagger';

export class UserInterestResponseDTO {
  @ApiProperty({
    example: 'aaeceb87-2538-4590-b0c1-8e7d51ed6328',
  })
  id: string;

  @ApiProperty({
    example: 'e18b21d4-e27c-422b-b9dd-7527d053f1f2',
  })
  userId: string;

  @ApiProperty({
    example: 'f7d4e5cf-ec23-4cf4-adca-3ca734165653',
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
