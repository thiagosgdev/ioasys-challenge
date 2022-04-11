import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListAttendeesService } from 'src/modules/attendees/context/listAttendees/listAttendee.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { AttendeeResponse } from 'src/shared/dtos/attendees/attendee.dto';

@ApiTags('attendees')
@Controller('/list')
export class ListAttendeesController {
  constructor(private listAttendeesService: ListAttendeesService) {}

  @Get()
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
