import {
  Body,
  Controller,
  Delete,
  HttpException,
  Query,
  Request,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { AttendeeResponse } from '../../../../shared/dtos/attendees/attendee.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { DeleteAttendeeService } from './deleteAttendee.service';

@ApiTags('attendees')
@Controller()
export class DeleteAttendeeController {
  constructor(private deleteAttendeeService: DeleteAttendeeService) {}

  @Delete()
  @ApiQuery({
    example: {
      eventId: '84c1c4c2-326e-4c45-8e78-20ca8556ea28',
    },
    required: true,
  })
  @ApiOkResponse({
    description: 'Attendee removed',
    type: AttendeeResponse,
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Query('eventId') eventId: string,
  ) {
    try {
      return await this.deleteAttendeeService.execute(req.user.userId, eventId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
