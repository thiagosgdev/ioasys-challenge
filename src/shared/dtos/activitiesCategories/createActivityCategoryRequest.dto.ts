import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityCategoryRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  activityId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categoryId: string;
}
