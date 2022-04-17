import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { AttendeeResponse } from '../../../../shared/dtos/attendees/attendee.dto';
import { ListAttendeesService } from './listAttendee.service';

@ApiTags('attendees')
@Controller('/list')
export class ListAttendeesController {
  constructor(private listAttendeesService: ListAttendeesService) {}

  @Get('/all')
  @ApiOkResponse({
    description: 'A list of all attendees will be returned',
    type: AttendeeResponse,
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listAttendeesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
