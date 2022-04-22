import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateUserDisabilityRequestDTO {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    example: [
      '31f6cd92-3e4d-437d-ab32-aff24be9edc3',
      '641f7c3b-1304-4502-aca2-b5af9336406b',
    ],
  })
  disabilityIds: string[];
}
