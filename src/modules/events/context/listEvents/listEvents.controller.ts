import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

import { Public } from '../../../../shared/decorators/public.decorator';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { ListEventsParamsRequest } from '../../../../shared/dtos/events/listEventParams.dto';
import { EventResponseDTO } from '../../../../shared/dtos/events/event.dto';
import { ListEventsService } from '../../context/listEvents/listEvents.service';

@Public()
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
    type: [EventResponseDTO],
  })
  @ApiCommomDecorators()
  public async handle(@Query() data?: ListEventsParamsRequest) {
    try {
      return await this.listEventsService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
