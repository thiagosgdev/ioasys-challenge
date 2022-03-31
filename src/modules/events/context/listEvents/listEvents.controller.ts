import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { ListEventsService } from './listEvents.service';

@ApiTags('events')
@Controller('/events')
export class ListEventsController {
  constructor(private listEventsService: ListEventsService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of events will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listEventsService.execute());
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
