import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

import { ListEventsService } from '../../context/listEvents/listEvents.service';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { EventAddressResponseDTO } from '../../../../shared/dtos/events/eventAddressResponse.dto';
import { EventResponseDTO } from 'src/shared/dtos/events/event.dto';

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
    type: EventResponseDTO,
  })
  @ApiCommomDecorators()
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
