import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

import { ListEventsService } from 'src/modules/events/context/listEvents/listEvents.service';

@ApiTags('events')
@Controller()
export class ListEventsController {
  constructor(private listEventsService: ListEventsService) {}

  @Get('/list')
  @ApiQuery({
    name: 'eventId',
    required: false,
  })
  @ApiOkResponse({
    description: 'A list of events will be returned',
  })
  public async handle(@Query('eventId') eventId: string) {
    try {
      return await this.listEventsService.execute(eventId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
