import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  refreshToken: string;
}
