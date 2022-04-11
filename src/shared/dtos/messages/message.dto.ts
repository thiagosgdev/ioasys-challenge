import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDTO {
  @ApiProperty({
    example: '9e36742a-717c-4701-8957-1d373df56aa7',
  })
  id: string;

  @ApiProperty({
    example: 'Motivational message',
  })
  text: string;

  @ApiProperty({
    example: '30f15915-19d0-4ab3-925f-044b8f5343b1',
  })
  messageTypeId: string;

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
