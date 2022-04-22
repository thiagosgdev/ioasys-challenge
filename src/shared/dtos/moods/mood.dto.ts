import { ApiProperty } from '@nestjs/swagger';

export class MoodResponseDTO {
  @ApiProperty({
    example: '4e437364-574b-4d5e-a6e1-f6a46a4eab08',
  })
  id: string;

  @ApiProperty({
    example: 'Feliz',
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
