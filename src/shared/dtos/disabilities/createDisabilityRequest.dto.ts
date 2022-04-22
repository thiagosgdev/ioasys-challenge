import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDisabilityRequestDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;
}
