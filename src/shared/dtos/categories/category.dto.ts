import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponse {
  @ApiProperty({
    example: 'aaeceb87-2538-4590-b0c1-8e7d51ed6328',
  })
  id: string;

  @ApiProperty({
    example: 'Esporte',
  })
  name: string;

  @ApiProperty({
    example: true,
  })
  active: boolean;

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
