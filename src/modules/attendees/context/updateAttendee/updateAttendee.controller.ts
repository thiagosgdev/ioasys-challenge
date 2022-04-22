import {
  Body,
  Controller,
  HttpException,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AttendeeRequestDTO } from '../../../../shared/dtos/attendees/attendeeRequest.dto';
import { AttendeeResponse } from '../../../../shared/dtos/attendees/attendee.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { UpdateAttendeeService } from './updateAttendee.service';

@ApiTags('attendees')
@Controller()
export class UpdateAttendeeController {
  constructor(private updateAttendeeService: UpdateAttendeeService) {}

  @Patch()
  @ApiOkResponse({
    description: 'Return the attendee updated.',
    type: AttendeeResponse,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiNotFoundResponse({
    description: 'The user is not registered for this event',
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Body() data: AttendeeRequestDTO,
  ) {
    try {
      return await this.updateAttendeeService.execute(req.user.userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
