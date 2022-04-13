import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateAttendeeRequestDTO } from '../../../../shared/dtos/attendees/createAttendeeRequest.dto';
import { AttendeeResponse } from '../../../../shared/dtos/attendees/attendee.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { CreateAttendeeService } from './createAttendee.service';

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
  @ApiConflictResponse({
    description: 'The user already is registered for this event',
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Body() data: CreateAttendeeRequestDTO,
  ) {
    try {
      const userId = req.user.userId;
      return await this.createAttendeeService.execute(userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
