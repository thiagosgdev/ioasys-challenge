import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListEventsService } from 'src/modules/events/context/listEvents/listEvents.service';

@ApiTags('events')
@Controller()
export class ListEventsController {
  constructor(private listEventsService: ListEventsService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of events will be returned',
  })
  public async handle(@Query('eventId') eventId: string) {
    try {
      return await this.listEventsService.execute(eventId);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
