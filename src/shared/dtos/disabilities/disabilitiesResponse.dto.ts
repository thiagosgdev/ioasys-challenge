import { ApiProperty } from '@nestjs/swagger';

export class DisabilitiesResponse {
  @ApiProperty({
    example: 'f16f692e-02dd-49db-b32c-ad1276c80bc6',
  })
  id: string;

  @ApiProperty({
    example: 'Disability',
  })
  name: string;

  @ApiProperty({
    example: 'Small description about the disability',
  })
  description: string;

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
  deleteAt: Date;
}
