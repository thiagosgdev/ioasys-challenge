import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateAttendeeRequestDTO } from 'src/shared/dtos/attendees/createAttendeeRequest.dto';
import { CreateAttendeeService } from 'src/modules/attendees/context/createAttendee/createAttendee.service';

@ApiTags('attendees')
@Controller()
export class CreateAttendeeController {
  constructor(private createAttendeeService: CreateAttendeeService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the attendee created.',
  })
  public async handle(@Body() data: CreateAttendeeRequestDTO) {
    try {
      return await this.createAttendeeService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
