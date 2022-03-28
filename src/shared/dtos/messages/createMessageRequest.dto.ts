import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMessageRequestDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  text: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  messageTypeId: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  active: boolean;
}
