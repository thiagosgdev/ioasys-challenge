import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateAttendeeRequestDTO } from 'src/shared/dtos/attendees/createAttendeeRequest.dto';
import { CreateAttendeeService } from 'src/modules/attendees/context/createAttendee/createAttendee.service';
import { AttendeeResponse } from 'src/shared/dtos/attendees/attendee.dto';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

@ApiTags('attendees')
@Controller()
export class CreateAttendeeController {
  constructor(private createAttendeeService: CreateAttendeeService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the attendee created.',
    type: AttendeeResponse,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
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
