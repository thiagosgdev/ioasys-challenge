import { ApiProperty } from '@nestjs/swagger';

export class MessageTypeResponseDTO {
  @ApiProperty({
    example: '107cb4fc-c109-45fe-8dc4-fc4e7062565f',
  })
  id: string;

  @ApiProperty({
    example: 'Mental Health',
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
