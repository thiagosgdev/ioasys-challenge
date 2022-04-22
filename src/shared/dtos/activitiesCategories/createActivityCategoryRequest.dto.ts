import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityCategoryRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '16e94c06-299c-4efb-af73-663322416f5e' })
  activityId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'a456b4f1-9349-4164-ba64-9da2ada8ccf8' })
  categoryId: string;
}
