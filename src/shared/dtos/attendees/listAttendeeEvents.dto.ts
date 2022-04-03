import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ListAttendeeEventsRequestDTO {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
