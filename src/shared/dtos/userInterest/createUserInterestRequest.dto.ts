import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateUserInterestRequestDTO {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    example: 'aaeceb87-2538-4590-b0c1-8e7d51ed6328',
    type: 'Array',
  })
  activityIds: string[];
}
